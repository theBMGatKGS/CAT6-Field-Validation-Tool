// CAT 6 Field Validation Tool — service worker
// Bump CACHE_NAME whenever the app shell changes so installed copies pick up the update.
const CACHE_NAME = 'cat6-field-validation-00-01-000';
const SHELL = [
  './',
  './index.html',
  './checklist.html',
  './manifest.json',
  './fonts/fonts.css',
  './fonts/Barlow-300-latin-ext.woff2',
  './fonts/Barlow-300-latin.woff2',
  './fonts/Barlow-400-latin-ext.woff2',
  './fonts/Barlow-400-latin.woff2',
  './fonts/Barlow-500-latin-ext.woff2',
  './fonts/Barlow-500-latin.woff2',
  './fonts/Barlow-600-latin-ext.woff2',
  './fonts/Barlow-600-latin.woff2',
  './fonts/BarlowCondensed-400-latin-ext.woff2',
  './fonts/BarlowCondensed-400-latin.woff2',
  './fonts/BarlowCondensed-600-latin-ext.woff2',
  './fonts/BarlowCondensed-600-latin.woff2',
  './fonts/BarlowCondensed-700-latin-ext.woff2',
  './fonts/BarlowCondensed-700-latin.woff2',
  './fonts/BarlowCondensed-800-latin-ext.woff2',
  './fonts/BarlowCondensed-800-latin.woff2',
  './fonts/IBMPlexMono-400-latin-ext.woff2',
  './fonts/IBMPlexMono-400-latin.woff2',
  './fonts/IBMPlexMono-500-latin-ext.woff2',
  './fonts/IBMPlexMono-500-latin.woff2',
  './fonts/IBMPlexMono-600-latin-ext.woff2',
  './fonts/IBMPlexMono-600-latin.woff2',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-512-maskable.png',
  './icons/apple-touch-icon.png'
];
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Stale-while-revalidate: serve from cache immediately (works offline), refresh the cache in the background.
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      const network = fetch(event.request)
        .then((resp) => {
          if (resp && resp.status === 200) {
            const copy = resp.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return resp;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
