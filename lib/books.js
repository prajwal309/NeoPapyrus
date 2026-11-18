const fs = require('fs');
const path = require('path');

const BOOKS_DIR = path.join(__dirname, '..', 'books');

function assertInside(baseDir, candidatePath) {
  const relative = path.relative(baseDir, candidatePath);
  if (relative.startsWith('..') || path.isAbsolute(relative)) {
    throw new Error('Invalid path');
  }
  return candidatePath;
}

function safeJoin(baseDir, ...parts) {
  const targetPath = path.resolve(baseDir, ...parts);
  return assertInside(path.resolve(baseDir), targetPath);
}

function listBooks() {
  return fs
    .readdirSync(BOOKS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
}

function getChaptersDir(book) {
  return safeJoin(BOOKS_DIR, book, 'chapters');
}

function extractChapterTitle(content, filename) {
  const match = content.match(/^#\s+(.+)$/m);
  if (match && match[1]) {
    return match[1].trim();
  }
  return filename.replace(/\.md$/i, '').replace(/[_-]+/g, ' ').trim();
}

function listChapters(book) {
  const chaptersDir = getChaptersDir(book);

  if (!fs.existsSync(chaptersDir)) {
    const error = new Error(`No chapters folder found for book "${book}".`);
    error.statusCode = 404;
    throw error;
  }

  return fs
    .readdirSync(chaptersDir)
    .filter((filename) => filename.toLowerCase().endsWith('.md'))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
    .map((filename) => {
      const filePath = safeJoin(chaptersDir, filename);
      const content = fs.readFileSync(filePath, 'utf8');

      return {
        id: filename.replace(/\.md$/i, ''),
        filename,
        title: extractChapterTitle(content, filename),
      };
    });
}

function readChapter(book, chapterId) {
  const chaptersDir = getChaptersDir(book);

  if (!fs.existsSync(chaptersDir)) {
    const error = new Error(`No chapters folder found for book "${book}".`);
    error.statusCode = 404;
    throw error;
  }

  const normalizedFilename = chapterId.toLowerCase().endsWith('.md')
    ? chapterId
    : `${chapterId}.md`;

  const filePath = safeJoin(chaptersDir, normalizedFilename);

  if (!fs.existsSync(filePath)) {
    const error = new Error(`Chapter "${chapterId}" was not found in book "${book}".`);
    error.statusCode = 404;
    throw error;
  }

  return fs.readFileSync(filePath, 'utf8');
}

module.exports = {
  BOOKS_DIR,
  listBooks,
  listChapters,
  readChapter,
};
