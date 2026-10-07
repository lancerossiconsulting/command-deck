/* Command Deck 2.0 — offline shell. Network-first for the app, cache-first for icons.
   Does not cache ledger, vantage, weather, or mailbox calls. */
const CACHE = 'deck-v2-13';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './data/decisions.json',
  './data/mail.json',
  './data/calendar.json',
  './icon.svg',
  './icon-180.png',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await Promise.all(ASSETS.map(async (url) => {
      try { await cache.add(url); } catch (e) { /* missing icon or offline install */ }
    }));
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  const icon = /\.(png|svg)$/.test(url.pathname);
  if (icon) {
    event.respondWith(caches.match(req).then((hit) => hit || fetch(req)));
    return;
  }

  event.respondWith((async () => {
    try {
      const fresh = await fetch(req);
      if (fresh && fresh.ok) {
        const copy = fresh.clone();
        caches.open(CACHE).then((cache) => cache.put(req, copy)).catch(() => {});
      }
      return fresh;
    } catch (e) {
      const hit = await caches.match(req);
      if (hit) return hit;
      if (req.mode === 'navigate') {
        const shell = await caches.match('./index.html');
        if (shell) return shell;
      }
      throw e;
    }
  })());
});
