// Prime the cache from the main thread
doFetch();

// Wait for request to finish before SW attempts
setTimeout(() => {
  navigator.serviceWorker.register('serviceWorker.js');
}, 10000);

function doFetch() {
  const start = Date.now();

  fetch('file.txt')
    .then(() => {
      const duration = Date.now() - start;
      const fromCache = duration < 5000;
      console.log(`main thread fetch took ${duration}ms, therefore fromCache=${fromCache}`);
    });
}
