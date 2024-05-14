// Define the name of your cache
var CACHE_NAME = 'audio-cache-v1';

// Install event: Service Worker caches files when installed
self.addEventListener('install', function(event) {
    console.log('Service Worker installed');
});

// Fetch event: Serve audio files from cache, or fetch from network if not available in cache
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.match(event.request).then(function(response) {
                if (response) {
                    // Serve cached response if available
                    return response;
                }

                // If not in cache, fetch from network
                return fetch(event.request).then(function(networkResponse) {
                    // Cache the fetched response for future use
                    cache.put(event.request, networkResponse.clone());
                    return networkResponse;
                });
            });
        })
    );
});
