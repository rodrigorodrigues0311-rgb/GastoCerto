/* GastoCerto Service Worker v8 */
const CACHE = 'gc-v8';

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE).then(cache => {
      // Cache relative assets only — avoids cross-origin issues
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './icons/icon-192x192.png',
        './icons/icon-512x512.png',
        './icons/icon-384x384.png',
        './icons/icon-152x152.png',
        './icons/icon-144x144.png',
        './icons/icon-128x128.png',
        './icons/icon-96x96.png',
        './icons/icon-72x72.png',
        './icons/apple-touch-icon.png',
        './icons/favicon-32.png',
      ]).catch(e => console.log('[SW] Cache addAll error:', e));
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  // Only handle same-origin requests
  const reqUrl = new URL(event.request.url);
  if (reqUrl.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      return fetch(event.request).then(resp => {
        if (resp && resp.status === 200 && resp.type !== 'opaque') {
          const clone = resp.clone();
          caches.open(CACHE).then(c => c.put(event.request, clone));
        }
        return resp;
      }).catch(() => {
        // Offline: return cached index.html for navigation
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
