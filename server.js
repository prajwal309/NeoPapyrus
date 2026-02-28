const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

const CHAPTERS_DIR = path.join(
  __dirname,
  "books",
  "Exoplanets",
  "chapters"
);


// ===============================
// Serve frontend
// ===============================
app.use(express.static("public"));

// ===============================
// Serve books (images etc.)
// ===============================
app.use("/books", express.static(path.join(__dirname, "books")));

// ===============================
// List Exoplanets Chapters
// ===============================
app.get("/api/chapters", (req, res) => {
  try {
    if (!fs.existsSync(CHAPTERS_DIR)) {
      return res.status(404).json({ error: "Chapters folder not found" });
    }

    const files = fs.readdirSync(CHAPTERS_DIR)
      .filter(f => f.endsWith(".md"))
      .sort();

    const chapters = files.map(file => {
      const fullPath = path.join(CHAPTERS_DIR, file);
      const content = fs.readFileSync(fullPath, "utf8");

      const h1Match = content.match(/^#\s+(.*)/m);

      return {
        id: file.replace(".md", ""),
        file,
        title: h1Match
          ? h1Match[1].trim()
          : file.replace(".md", "")
      };
    });

    res.json(chapters);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to load chapters" });
  }
});

// ===============================
// Serve Specific Chapter
// ===============================
app.get("/api/chapters/:file", (req, res) => {
  try {
    const filePath = path.join(CHAPTERS_DIR, req.params.file);

    if (!filePath.startsWith(CHAPTERS_DIR)) {
      return res.status(403).end();
    }

    if (!fs.existsSync(filePath)) {
      return res.status(404).end();
    }

    res.sendFile(filePath);

  } catch (err) {
    console.error(err);
    res.status(500).end();
  }
});

// ===============================
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});