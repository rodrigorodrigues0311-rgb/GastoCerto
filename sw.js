const CACHE = 'gastocerto-v6';
const ASSETS = [
  './', './index.html', './manifest.json',
  './icons/icon-72x72.png', './icons/icon-96x96.png',
  './icons/icon-128x128.png', './icons/icon-144x144.png',
  './icons/icon-152x152.png', './icons/icon-192x192.png',
  './icons/icon-384x384.png', './icons/icon-512x512.png',
  './icons/apple-touch-icon.png', './icons/favicon-32.png'
];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).catch(()=>{}));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if(e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).then(resp => {
      if(resp && resp.status === 200 && resp.type === 'basic'){
        const clone = resp.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
      }
      return resp;
    }).catch(() => caches.match('./index.html')))
  );
});
