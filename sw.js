/* GastoCerto SW — v4 — atualiza cache automaticamente */
const CACHE = 'gc-v43';
const BASE  = '/GastoCerto/';

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll([
      BASE,
      BASE + 'index.html',
      BASE + 'manifest.json',
      BASE + 'icon-192x192.png',
      BASE + 'icon-512x512.png',
    ])).catch(() => {})
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Network-first: sempre busca versão mais recente do servidor
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  // Para o index.html — sempre busca na rede primeiro
  if (url.pathname.endsWith('index.html') || url.pathname.endsWith('/GastoCerto/')) {
    e.respondWith(
      fetch(e.request)
        .then(r => {
          const clone = r.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
          return r;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }
  // Demais arquivos — cache first
  e.respondWith(
    caches.match(e.request).then(r =>
      r || fetch(e.request).then(r2 => {
        const clone = r2.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return r2;
      }).catch(() => caches.match(BASE + 'index.html'))
    )
  );
});
