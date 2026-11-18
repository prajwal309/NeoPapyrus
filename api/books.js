const { listBooks } = require('../lib/books');

module.exports = function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const books = listBooks();
    return res.status(200).json(books);
  } catch (error) {
    console.error('Failed to list books:', error);
    return res.status(error.statusCode || 500).json({
      error: error.statusCode ? error.message : 'Failed to list books',
    });
  }
};
