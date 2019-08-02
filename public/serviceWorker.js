self.addEventListener('install', () => self.skipWaiting());

// Prevent browser stopping worker
self.addEventListener('fetch', () => {});

doFetch();
setInterval(doFetch, 10000);

function doFetch() {
  const start = Date.now();

  fetch('file.txt')
    .then(() => {
      const duration = Date.now() - start;
      const fromCache = duration < 5000;
      console.log(`sw fetch took ${duration}ms, therefore fromCache=${fromCache}`);
    });
}
