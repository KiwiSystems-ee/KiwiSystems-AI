// Minimal service worker: satisfies PWA installability requirements
// (browsers and tools like PWABuilder check for a registered service worker).
// This intentionally does NOT cache or intercept requests -- the app is
// account/session-based and always needs a live connection to the server,
// so offline caching would just serve stale, broken pages. If offline
// support is wanted later, add caching logic here.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
