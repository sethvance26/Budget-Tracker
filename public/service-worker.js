const FILES_TO_CACHE = [
    './',
    './index.html',
    './assets/css/style.css',
    './assets/js/db.js',
    './assets/js/index.js',
    "./manifest.webmanifest",
    './assets/images/icons/icon-192x192.jpg',
    './assets/images/icons/icon-512x512.jpg',
    'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
    'https://cdn.jsdelivr.net/npm/chart.js@2.8.0'
];
  
  const CACHE_NAME = "static-cache-v2";
  const DATA_CACHE_NAME = "data-cache-v1";
  
  // install
  self.addEventListener("install", function(evt) {
    evt.waitUntil(
      caches.open(CACHE_NAME).then(cache => {
        console.log("Your files were pre-cached successfully!");
        return cache.addAll(FILES_TO_CACHE);
      })
    );
  
    self.skipWaiting();
  });