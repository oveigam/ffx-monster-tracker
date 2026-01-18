const CACHE = "ffx-v1";

self.addEventListener("install", (event) => {
    event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) return response;
            return fetch(event.request).then((response) => {
                caches.open(CACHE).then((cache) => {
                    cache.put(event.request, response.clone());
                });
                return response;
            });
        })
    );
});