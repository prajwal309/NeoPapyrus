const { listChapters } = require('../../../lib/books');

module.exports = function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { book } = req.query;
    const chapters = listChapters(book);
    return res.status(200).json(chapters);
  } catch (error) {
    console.error('Failed to list chapters:', error);
    return res.status(error.statusCode || 500).json({
      error: error.message || 'Failed to list chapters',
    });
  }
};
