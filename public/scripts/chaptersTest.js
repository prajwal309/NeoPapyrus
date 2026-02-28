const chaptersEl = document.getElementById("chapters");
const contentEl  = document.getElementById("content");
const breadcrumb = document.getElementById("breadcrumb");
const searchEl   = document.getElementById("search");


let ALL_CHAPTERS = [];

// Fetch list of markdown files from server
async function fetchChapters() {
  try {
    const res = await fetch("/api/chapters");
    ALL_CHAPTERS = await res.json();
    renderChapterList();
    openChapterFromHash();
  } catch (err) {
    console.error("Error fetching chapters:", err);
  }
}


function renderChapterList(filter = "") {
  const q = filter.toLowerCase();
  chaptersEl.innerHTML = "";

  const filtered = ALL_CHAPTERS.filter(c =>
    !q || c.title.toLowerCase().includes(q)
  );

  filtered.forEach((c, index) => {
    const item = document.createElement("div");
    item.className = "chapter-item";
    item.dataset.id = c.id;

    item.innerHTML = `
      <div class="chapter-number">${index + 1}.</div>
      <div class="chapter-text">
        <div class="chapter-title">${c.title}</div>
        ${c.subtitle ? `<div class="chapter-desc">${c.subtitle}</div>` : ""}
      </div>
    `;

    item.onclick = () => openChapter(c.id, true);
    chaptersEl.appendChild(item);
  });

  if (filtered.length) {
    setActiveButton(getActiveIdFromHash() || filtered[0].id);
  }
}


async function openChapter(id, pushState = false) {
  const chapter = ALL_CHAPTERS.find(c => c.id === id);
  if (!chapter) return;
  breadcrumb.textContent = chapter.title;
  try {
    const res = await fetch(`/api/chapters/${chapter.file}`);
    const markdown = await res.text();

    // 1. Stash math blocks before marked touches them
    const mathBlocks = [];
    const protected_md = markdown
      .replace(/\$\$[\s\S]*?\$\$/g, match => {
        mathBlocks.push(match);
        return `MATHBLOCK_${mathBlocks.length - 1}_END`;
      })
      .replace(/\\\[[\s\S]*?\\\]/g, match => {
        mathBlocks.push(match);
        return `MATHBLOCK_${mathBlocks.length - 1}_END`;
      })
      .replace(/\\\([\s\S]*?\\\)/g, match => {
        mathBlocks.push(match);
        return `MATHBLOCK_${mathBlocks.length - 1}_END`;
      });

    // 2. Parse markdown normally
    let html = marked.parse(protected_md);

    // 3. Restore math blocks
    html = html.replace(/MATHBLOCK_(\d+)_END/g, (_, i) => mathBlocks[i]);

    contentEl.innerHTML = html;

    // 4. Now KaTeX can find the delimiters intact
    renderMathInElement(contentEl, {
      delimiters: [
        { left: "$$",  right: "$$",  display: true  },
        { left: "\\[", right: "\\]", display: true  },
        { left: "$",   right: "$",   display: false },
        { left: "\\(", right: "\\)", display: false }
      ],
      throwOnError: false
    });
  } catch (err) {
    contentEl.innerHTML = "<p>Error loading chapter.</p>";
  }
  setActiveButton(id);
  if (pushState) location.hash = id;
}

function getActiveIdFromHash() {
  return location.hash.replace("#", "") || null;
}

function setActiveButton(id) {
  document.querySelectorAll(".chapter-btn").forEach(btn => {
    btn.setAttribute("aria-current", btn.dataset.id === id);
  });
}

function openChapterFromHash() {
  const id = getActiveIdFromHash();
  if (id) openChapter(id);
  else if (ALL_CHAPTERS.length) openChapter(ALL_CHAPTERS[0].id);
}

window.addEventListener("hashchange", openChapterFromHash);

searchEl.addEventListener("input", e => {
  renderChapterList(e.target.value);
});

// Initialize
fetchChapters();