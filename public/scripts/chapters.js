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

  filtered.forEach(c => {
    const btn = document.createElement("button");
    btn.className = "chapter-btn";
    btn.dataset.id = c.id;
    btn.innerHTML = `
      <div class="chapter-title">${c.title}</div>
      <div class="chapter-desc">${c.subtitle}</div>
    `;
    btn.onclick = () => openChapter(c.id, true);
    chaptersEl.appendChild(btn);
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
    const html = marked.parse(markdown);
    contentEl.innerHTML = html;
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