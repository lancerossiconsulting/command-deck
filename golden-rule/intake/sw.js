/* Golden Rule intake.
   This file lives under /golden-rule/intake/, so its scope is only that folder.
   The Command Deck worker at the site root would otherwise control this path.
   This worker does not cache anything. */
self.addEventListener("install", function () {
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(self.clients.claim());
});
