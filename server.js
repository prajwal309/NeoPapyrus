const express = require("express");
const fs = require("fs");
const path = require("path");




const app = express();
const CHAPTERS_DIR = path.join(__dirname, "Exoplanets", "chapters");

// Serve frontend
app.use(express.static("public"));

app.use("/:book/figures", (req, res, next) => {
  express.static(`${req.params.book}/chapters/figures`)(req, res, next);
});

// List chapters
app.get("/api/chapters", (req, res) => {
  const files = fs.readdirSync(CHAPTERS_DIR)
    .filter(f => f.endsWith(".md"))
    .sort();

  const chapters = files.map(file => ({
    id: file.replace(".md", ""),
    title: file.replace(".md", "").replace(/([A-Z])/g, " $1").trim(),
    file,
  }));

  res.json(chapters);
});

// Serve a specific chapter's markdown
app.get("/api/chapters/:file", (req, res) => {
  const filePath = path.join(CHAPTERS_DIR, req.params.file);
  if (!filePath.startsWith(CHAPTERS_DIR)) return res.status(403).end(); // path traversal guard
  if (!fs.existsSync(filePath)) return res.status(404).end();
  res.type("text/plain").sendFile(filePath);
});

app.listen(3000, () => console.log("http://localhost:3000"));