const express = require('express');

const app = express();


app.use((req, res, next) => {
  if (req.url.endsWith('.txt')) {
    setTimeout(next, 5000);
  } else {
    next();
  }
});

app.use(express.static('public', {
  setHeaders: (res, path, stat) => {
    if (path.endsWith('.txt')) {
      res.setHeader('Cache-Control', 'max-age=31536000');
    }
  },
}));

app.listen(80);
