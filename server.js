// server.js
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

const ROOT = __dirname;
const PUBLIC_DIR = path.join(ROOT, "public");
const BOOKS_DIR = path.join(ROOT, "books");

app.use(express.static(PUBLIC_DIR));

// Serve the books folder so figures can be loaded via /books/<Book>/figures/...
app.use("/books", express.static(BOOKS_DIR));

function safeJoinBooks(...parts) {
  const p = path.join(BOOKS_DIR, ...parts);
  // prevent path traversal
  if (!p.startsWith(BOOKS_DIR)) throw new Error("Invalid path");
  return p;
}

// --- API: list books (folders under /books)
app.get("/api/books", (req, res) => {
  try {
    const entries = fs.readdirSync(BOOKS_DIR, { withFileTypes: true });
    const books = entries
      .filter((d) => d.isDirectory())
      .map((d) => d.name)
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- API: list chapters for a given book
app.get("/api/books/:book/chapters", (req, res) => {
  try {
    const book = req.params.book;

    const chaptersDir = safeJoinBooks(book, "chapters");
    if (!fs.existsSync(chaptersDir)) {
      return res.status(404).json({ error: `No chapters folder for book ${book}` });
    }

    const files = fs
      .readdirSync(chaptersDir)
      .filter((f) => f.toLowerCase().endsWith(".md"))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

    const chapters = files.map((file) => {
      const filePath = path.join(chaptersDir, file);
      const content = fs.readFileSync(filePath, "utf8");

      // Extract first H1: "# Title"
      const match = content.match(/^#\s+(.+)/m);
      const title = match
        ? match[1].trim()
        : file.replace(/\.md$/i, "").replace(/_/g, " ");

      return {
        id: file.replace(/\.md$/i, ""),
        filename: file,
        title,
      };
    });

    res.json(chapters);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- API: get chapter markdown
app.get("/api/books/:book/chapters/:chapterId", (req, res) => {
  try {
    const { book, chapterId } = req.params;

    const chaptersDir = safeJoinBooks(book, "chapters");

    // Allow chapterId with or without .md
    const fname = chapterId.toLowerCase().endsWith(".md") ? chapterId : `${chapterId}.md`;
    const filePath = path.join(chaptersDir, fname);

    if (!filePath.startsWith(chaptersDir)) {
      return res.status(400).send("Bad path");
    }
    if (!fs.existsSync(filePath)) {
      return res.status(404).send("Chapter not found");
    }

    res.type("text/markdown").send(fs.readFileSync(filePath, "utf8"));
  } catch (err) {
    res.status(500).send(err.message);
  }
});


app.get("/api/chapters", (req, res) => {
  const files = fs.readdirSync(CHAPTERS_DIR)
    .filter(f => f.endsWith(".md"))
    .sort();

  const chapters = files.map(file => {
    const filePath = path.join(CHAPTERS_DIR, file);
    const content = fs.readFileSync(filePath, "utf-8");

    // Extract first H1 (# Title)
    const match = content.match(/^#\s+(.+)/m);
    const title = match ? match[1].trim() : file.replace(".md", "");

    return {
      id: file.replace(".md", ""),
      title
    };
  });

  res.json(chapters);
});

// Frontend routes
app.get("/", (req, res) => res.sendFile(path.join(PUBLIC_DIR, "index.html")));
app.get("/book.html", (req, res) => res.sendFile(path.join(PUBLIC_DIR, "book.html")));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running: http://localhost:${PORT}`));