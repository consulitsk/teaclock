const CACHE_NAME = 'teaclock-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './alarm.mp3'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

self.addEventListener('sync', (event) => {
  if (event.tag === 'keep-alive') {
    event.waitUntil(
      new Promise((resolve) => setTimeout(resolve, 1000)) // Udržiavanie aktivity
    );
  }
});

