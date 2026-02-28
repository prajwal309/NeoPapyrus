const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const CHAPTERS_DIR = path.join(__dirname, "Exoplanets", "chapters");

// Serve frontend
app.use(express.static("public"));

// Serve figures inside chapters
app.use("/:book/figures", (req, res, next) => {
  express.static(path.join(__dirname, req.params.book, "chapters", "figures"))(req, res, next);
});


// ===============================
// List chapters (AUTO TITLE PARSE)
// ===============================
app.get("/api/chapters", (req, res) => {

  const files = fs.readdirSync(CHAPTERS_DIR)
    .filter(f => f.endsWith(".md"))
    .sort();

  const chapters = files.map(file => {

    const fullPath = path.join(CHAPTERS_DIR, file);
    const content = fs.readFileSync(fullPath, "utf8");

    // Extract first H1 (# Title)
    const h1Match = content.match(/^#\s+(.*)/m);


    return {
      id: file.replace(".md", ""),
      file,
      title: h1Match ? h1Match[1].trim() : file.replace(".md", "")
    };
  });

  res.json(chapters);
});


// =================================
// Serve a specific chapter markdown
// =================================
app.get("/api/chapters/:file", (req, res) => {

  const filePath = path.join(CHAPTERS_DIR, req.params.file);

  // Path traversal protection
  if (!filePath.startsWith(CHAPTERS_DIR)) {
    return res.status(403).end();
  }

  if (!fs.existsSync(filePath)) {
    return res.status(404).end();
  }

  res.type("text/plain").sendFile(filePath);
});


// Start server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});