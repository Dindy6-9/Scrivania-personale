// Service worker minimo, richiesto da Chrome per poter "installare" l'app.
// Non salva nulla offline: serve solo a rendere l'app installabile.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  self.clients.claim();
});
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
