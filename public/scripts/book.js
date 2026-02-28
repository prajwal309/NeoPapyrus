/* =====================================================
   STATE
===================================================== */

const chaptersEl   = document.getElementById("chapters");
const contentEl    = document.getElementById("content");
const bookTitleEl  = document.getElementById("bookTitle");
const bookSubEl    = document.getElementById("bookSub");
const searchEl     = document.getElementById("search");
const breadcrumbEl = document.getElementById("breadcrumb");

const settingsBtn   = document.getElementById("settingsBtn");
const settingsPanel = document.getElementById("settingsPanel");

const params = new URLSearchParams(location.search);
const BOOK = params.get("book");

let ALL_CHAPTERS = [];

/* =====================================================
   INIT
===================================================== */

if (!BOOK) {
  contentEl.textContent = "No book selected. Go back to the library.";
} else {
  bookTitleEl.textContent = BOOK;
  bookSubEl.textContent = "Chapters";
  init();
}

async function init() {
  await fetchChapters();
  setupSettingsPanel();
  setupEquationToggle();
  setupReadingLevels();
  openChapterFromHashOrFirst();

  searchEl?.addEventListener("input", () =>
    renderChapterList(searchEl.value)
  );
}

/* =====================================================
   SETTINGS PANEL
===================================================== */

function setupSettingsPanel() {
  if (!settingsBtn || !settingsPanel) return;

  settingsBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    settingsPanel.classList.toggle("open");
  });

  document.addEventListener("click", (e) => {
    if (!settingsPanel.classList.contains("open")) return;
    if (settingsPanel.contains(e.target) || settingsBtn.contains(e.target)) return;
    settingsPanel.classList.remove("open");
  });

  settingsPanel.addEventListener("click", (e) => e.stopPropagation());
}

/* =====================================================
   FETCH CHAPTERS
===================================================== */

async function fetchChapters() {
  const res = await fetch(`/api/books/${encodeURIComponent(BOOK)}/chapters`);
  if (!res.ok) throw new Error("Failed to fetch chapters");

  ALL_CHAPTERS = await res.json();
  renderChapterList("");
}

/* =====================================================
   SIDEBAR
===================================================== */

function renderChapterList(filter = "") {
  const q = filter.trim().toLowerCase();

  const items = ALL_CHAPTERS.filter(c =>
    !q || c.title.toLowerCase().includes(q)
  );

  chaptersEl.innerHTML = "";

  items.forEach(c => {
    const btn = document.createElement("button");
    btn.className = "chapter-btn";
    btn.dataset.id = c.id;
    btn.textContent = c.title;

    btn.onclick = () => {
      location.hash = `#${encodeURIComponent(c.id)}`;
    };

    chaptersEl.appendChild(btn);
  });
}

function setActive(chapterId) {
  document.querySelectorAll(".chapter-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.id === chapterId);
  });
}

/* =====================================================
   LOAD CHAPTER
===================================================== */
async function loadChapter(chapterId) {
  try {
    const url = `/api/books/${encodeURIComponent(BOOK)}/chapters/${encodeURIComponent(chapterId)}`;
    const res = await fetch(url);
    if (!res.ok) {
      contentEl.textContent = "Failed to load chapter.";
      return;
    }
    const md = await res.text();

    // --- STEP 1: Extract math blocks before marked touches them ---
    const mathStore = [];
    const placeholder = (i) => `MATHPLACEHOLDER${i}ENDMATH`;

    let protected = md
      // Display math: $$...$$ 
      .replace(/\$\$([\s\S]+?)\$\$/g, (_, math) => {
        mathStore.push({ display: true, math });
        return placeholder(mathStore.length - 1);
      })
      // Display math: \[...\]
      .replace(/\\\[([\s\S]+?)\\\]/g, (_, math) => {
        mathStore.push({ display: true, math });
        return placeholder(mathStore.length - 1);
      })
      // Inline math: \(...\)
      .replace(/\\\(([\s\S]+?)\\\)/g, (_, math) => {
        mathStore.push({ display: false, math });
        return placeholder(mathStore.length - 1);
      })
      // Inline math: $...$  (single dollar, non-greedy, no newlines)
      .replace(/\$([^\n$]+?)\$/g, (_, math) => {
        mathStore.push({ display: false, math });
        return placeholder(mathStore.length - 1);
      });

    // --- STEP 2: Parse markdown (math is safely hidden) ---
    let html = marked.parse(protected);

    // --- STEP 3: Restore math as rendered KaTeX ---
    html = html.replace(/MATHPLACEHOLDER(\d+)ENDMATH/g, (_, i) => {
      const { display, math } = mathStore[parseInt(i)];
      try {
        return katex.renderToString(math, {
          displayMode: display,
          throwOnError: false
        });
      } catch (e) {
        return `<code>${math}</code>`;
      }
    });

    // Fix relative image paths
    const fixed = html
      .replaceAll('src="figures/', `src="/books/${BOOK}/figures/`)
      .replaceAll('src="chapters/figures/', `src="/books/${BOOK}/chapters/figures/`)
      .replaceAll("src='figures/", `src='/books/${BOOK}/figures/`)
      .replaceAll("src='chapters/figures/", `src='/books/${BOOK}/chapters/figures/`);

    contentEl.innerHTML = fixed;

    // Update breadcrumb
    const chapterMeta = ALL_CHAPTERS.find(c => c.id === chapterId);
    if (breadcrumbEl && chapterMeta) {
      breadcrumbEl.textContent = chapterMeta.title;
    }

    // No need for renderMathInElement anymore — KaTeX already rendered above
    // but keep it as a fallback if you have math elsewhere in the page
    
    applyReadingLevel();
    applyEquationVisibility();
    document.querySelector(".content")?.scrollTo({ top: 0, behavior: "smooth" });

  } catch (err) {
    console.error("Error loading chapter:", err);
    contentEl.textContent = "Error loading chapter.";
  }
}

/* =====================================================
   HASH ROUTING
===================================================== */

function openChapterFromHashOrFirst() {

  function resolveChapter() {
    const id = decodeURIComponent(location.hash.replace(/^#/, "") || "").trim();
    return ALL_CHAPTERS.some(c => c.id === id)
      ? id
      : ALL_CHAPTERS[0]?.id;
  }

  const initial = resolveChapter();

  if (!initial) {
    contentEl.textContent = "No chapters found.";
    return;
  }

  if (!location.hash) {
    location.hash = `#${encodeURIComponent(initial)}`;
  }

  setActive(initial);
  loadChapter(initial);

  window.addEventListener("hashchange", () => {
    const id = resolveChapter();
    if (!id) return;

    setActive(id);
    loadChapter(id);
  });
}

/* =====================================================
   EQUATION TOGGLE
===================================================== */

function setupEquationToggle() {
  const eqToggle = document.getElementById("eqToggle");
  if (!eqToggle) return;

  const saved = localStorage.getItem("showEquations");
  if (saved !== null) {
    eqToggle.checked = saved === "true";
  }

  eqToggle.addEventListener("change", () => {
    localStorage.setItem("showEquations", eqToggle.checked);
    applyEquationVisibility();
  });

  applyEquationVisibility();
}

function applyEquationVisibility() {
  const show = localStorage.getItem("showEquations") !== "false";
  document.body.classList.toggle("hide-equations", !show);
}

/* =====================================================
   READING LEVEL SYSTEM
===================================================== */

function setupReadingLevels() {
  const buttons = document.querySelectorAll("#settingsPanel .segmented button");
  if (!buttons.length) return;

  const savedLevel = localStorage.getItem("readingLevel") || "101";

  buttons.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.level === savedLevel);

    btn.addEventListener("click", () => {
      const level = btn.dataset.level;

      localStorage.setItem("readingLevel", level);

      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      applyReadingLevel();
    });
  });

  applyReadingLevel();
}

function applyReadingLevel() {
  const level = parseInt(localStorage.getItem("readingLevel") || "101", 10);

  document.querySelectorAll("#content [data-level]").forEach(el => {
    const elLevel = parseInt(el.dataset.level || "101", 10);
    el.style.display = elLevel <= level ? "" : "none";
  });
}