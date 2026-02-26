const STATIC_CACHE = "portfolio-static-v1";
const PAGE_CACHE = "portfolio-pages-v1";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) =>
      cache.addAll([
        "/",
        "/manifest.webmanifest",
        "/favicon/web-app-manifest-192x192.png",
        "/images/logo.webp",
      ]),
    ),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => ![STATIC_CACHE, PAGE_CACHE].includes(key))
          .map((key) => caches.delete(key)),
      ),
    ),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const { request } = event;
  const acceptsHtml = request.headers.get("accept")?.includes("text/html");
  const url = new URL(request.url);
  const isSameOrigin = url.origin === self.location.origin;

  if (!isSameOrigin) return;

  if (acceptsHtml) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const responseClone = response.clone();
          caches
            .open(PAGE_CACHE)
            .then((cache) => cache.put(request, responseClone))
            .catch(() => {});
          return response;
        })
        .catch(() => caches.match(request).then((cached) => cached || caches.match("/"))),
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        const responseClone = response.clone();
        caches
          .open(STATIC_CACHE)
          .then((cache) => cache.put(request, responseClone))
          .catch(() => {});
        return response;
      });
    }),
  );
});
