const { readChapter } = require('../../../../lib/books');

module.exports = function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).send('Method not allowed');
  }

  try {
    const { book, chapterId } = req.query;
    const content = readChapter(book, chapterId);
    res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
    return res.status(200).send(content);
  } catch (error) {
    console.error('Failed to read chapter:', error);
    return res.status(error.statusCode || 500).send(
      error.message || 'Failed to read chapter'
    );
  }
};
