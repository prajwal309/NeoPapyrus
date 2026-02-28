const chaptersEl = document.getElementById("chapters");
const contentEl  = document.getElementById("content");
const breadcrumb = document.getElementById("breadcrumb");
const searchEl   = document.getElementById("search");

// ── Dropdown helpers ──────────────────────────────────────────────
function setupDropdown(toggleId, menuId) {
  const toggle = document.getElementById(toggleId);
  const menu   = document.getElementById(menuId);
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("open");
  });
  document.addEventListener("click", () => menu.classList.remove("open"));
}

setupDropdown("levelToggle", "levelMenu");
setupDropdown("equationToggle", "equationMenu");

// ── Level selector ────────────────────────────────────────────────
let CURRENT_LEVEL = "101";
const levelToggle = document.getElementById("levelToggle");

document.querySelectorAll("#levelMenu .dropdown-item").forEach(btn => {
  btn.addEventListener("click", () => {
    CURRENT_LEVEL = btn.dataset.level;
    levelToggle.textContent = btn.textContent + " ▾";
    document.querySelectorAll("#levelMenu .dropdown-item")
      .forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById("levelMenu").classList.remove("open");
    fetchChapters();
  });
});

// ── Equation toggle ───────────────────────────────────────────────
let SHOW_EQUATIONS = true;
const equationToggle = document.getElementById("equationToggle");

document.querySelectorAll("#equationMenu .dropdown-item").forEach(btn => {
  btn.addEventListener("click", () => {
    SHOW_EQUATIONS = btn.dataset.eq === "show";
    equationToggle.textContent = btn.textContent + " ▾";
    document.querySelectorAll("#equationMenu .dropdown-item")
      .forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById("equationMenu").classList.remove("open");
    document.querySelectorAll(".katex-display, .katex")
      .forEach(el => el.style.display = SHOW_EQUATIONS ? "" : "none");
  });
});

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