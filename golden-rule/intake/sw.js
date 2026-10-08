/* Golden Rule intake.
   This file lives under /golden-rule/intake/, so its scope is only that folder.
   The Command Deck worker at the site root would otherwise control this path.
   gr-intake-v2 drops any earlier intake cache and loads the page from the network
   first, so a new FormSubmit alias is not stuck behind an old copy. */
var CACHE = "gr-intake-v2";

self.addEventListener("install", function () {
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (key) {
      return key.indexOf("gr-intake-") === 0 && key !== CACHE;
    }).map(function (key) {
      return caches.delete(key);
    }));
  }).then(function () {
    return self.clients.claim();
  }));
});

self.addEventListener("fetch", function (event) {
  var req = event.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.indexOf("/golden-rule/intake/") === -1) return;
  event.respondWith(fetch(req).then(function (res) {
    if (res && res.ok) {
      var copy = res.clone();
      caches.open(CACHE).then(function (cache) {
        return cache.put(req, copy);
      }).catch(function () {});
    }
    return res;
  }).catch(function () {
    return caches.match(req).then(function (hit) {
      if (hit) return hit;
      throw new Error("offline");
    });
  }));
});
