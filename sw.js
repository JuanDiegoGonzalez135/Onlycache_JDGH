const STATIC_CACHE_NAME = 'app-shell-v2';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js'
];

// Precaching
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  );
  console.log('[SW] Instalado y App Shell precacheado');
});

// Cache Only
self.addEventListener('fetch', event => {
  // Comprobamos si el recurso termina igual que alguno del array ASSETS
  const isAppShellResource = ASSETS.some(asset =>
    event.request.url.endsWith(asset.replace('./', ''))
  );

  if (isAppShellResource) {
    event.respondWith(
      caches.match(event.request).then(response => {
        if (response) return response;
      })
    );
  }
});
