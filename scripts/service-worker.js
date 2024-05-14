// Define the name of your cache
var CACHE_NAME = 'audio-cache-v1';

// List of URLs to cache
var urlsToCache = [
    '/path/to/audio1.mp3',
    '/path/to/audio2.mp3',
    // Add paths to all your audio files here
];

// Install event: cache all URLs in the list
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Cache opened');
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch event: Serve audio files from cache, or fetch from network if not available in cache
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // Cache hit - return response
                if (response) {
                    return response;
                }

                // Not in cache - fetch from network
                return fetch(event.request);
            })
    );
});
