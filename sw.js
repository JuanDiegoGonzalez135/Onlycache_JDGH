const STATIC_CACHE_NAME = 'app-shell-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  );
  console.log('[SW] Instalado y App Shell precacheado');
});

self.addEventListener('fetch', event => {
  const urlPath = new URL(event.request.url).pathname;
  const isAppShellResource = ASSETS.includes(urlPath);

  if (isAppShellResource) {
    event.respondWith(
      caches.match(event.request)
        .then(response => response)
    );
  }
});
