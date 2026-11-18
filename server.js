const express = require('express');
const path = require('node:path');
const { BOOKS_DIR } = require('./lib/books');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use('/books', express.static(BOOKS_DIR));

// Express supplies route parameters separately from the query string.
app.all('/api/books', require('./api/books'));
app.all('/api/books/:book/chapters', (req, res) =>
  require('./api/books/[book]/chapters')({ method: req.method, query: req.params }, res)
);
app.all('/api/books/:book/chapters/:chapterId', (req, res) =>
  require('./api/books/[book]/chapters/[chapterId]')({ method: req.method, query: req.params }, res)
);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running: http://localhost:${port}`));
