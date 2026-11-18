/* =====================================================
   STATE
===================================================== */

const chaptersEl   = document.getElementById("chapters");
const contentEl    = document.getElementById("content");
const bookTitleEl  = document.getElementById("bookTitle");
const searchEl     = document.getElementById("search");
const breadcrumbEl = document.getElementById("breadcrumb");
const contentsToggle = document.getElementById("contentsToggle");
const chapterPagination = document.getElementById("chapterPagination");
const previousChapter = document.getElementById("previousChapter");
const nextChapter = document.getElementById("nextChapter");

const settingsBtn   = document.getElementById("settingsBtn");
const settingsPanel = document.getElementById("settingsPanel");

const params = new URLSearchParams(location.search);
const BOOK = params.get("book");

let ALL_CHAPTERS = [];
let activeChapterId;
let chapterRequest;

/* =====================================================
   INIT
===================================================== */

if (!BOOK) {
  contentEl.textContent = "No book selected. Go back to the library.";
} else {
  bookTitleEl.textContent = BOOK;
  document.title = `${BOOK} | NeoPapyrus`;
  init().catch(err => {
    console.error("Error loading chapter list:", err);
    contentEl.textContent = "Could not load the chapter list.";
  });
}

async function init() {
  await fetchChapters();
  setupSettingsPanel();
  setupEquationToggle();
  setupReadingLevels();
  openChapterFromHashOrFirst();

  contentsToggle.addEventListener("click", () => {
    const isOpen = contentsToggle.getAttribute("aria-expanded") === "true";
    contentsToggle.setAttribute("aria-expanded", String(!isOpen));
  });

  searchEl?.addEventListener("input", () =>
    renderChapterList(searchEl.value)
  );
}

/* =====================================================
   SETTINGS PANEL
===================================================== */

function setupSettingsPanel() {
  if (!settingsBtn || !settingsPanel) return;

  function setOpen(open) {
    settingsPanel.hidden = !open;
    settingsBtn.setAttribute("aria-expanded", String(open));
  }

  settingsBtn.addEventListener("click", () => {
    setOpen(settingsPanel.hidden);
  });

  document.addEventListener("click", (e) => {
    if (settingsPanel.contains(e.target) || settingsBtn.contains(e.target)) return;
    setOpen(false);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !settingsPanel.hidden) {
      setOpen(false);
      settingsBtn.focus();
    }
  });
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
  if (q && !items.length) {
    const message = document.createElement("p");
    message.className = "chapter-empty";
    message.textContent = "No matching chapters.";
    chaptersEl.appendChild(message);
  }

  items.forEach(c => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chapter-btn";
    btn.dataset.id = c.id;
    btn.textContent = c.title;

    btn.onclick = () => {
      if (contentsToggle.getAttribute("aria-expanded") === "true") {
        contentsToggle.setAttribute("aria-expanded", "false");
        contentsToggle.focus();
      }
      location.hash = `#${encodeURIComponent(c.id)}`;
    };

    chaptersEl.appendChild(btn);
  });
  setActive(activeChapterId);
}

function setActive(chapterId) {
  activeChapterId = chapterId;
  document.querySelectorAll(".chapter-btn").forEach(b => {
    const current = b.dataset.id === chapterId;
    b.classList.toggle("active", current);
    if (current) b.setAttribute("aria-current", "page");
    else b.removeAttribute("aria-current");
  });
}

function updateChapterNavigation(chapterId) {
  const index = ALL_CHAPTERS.findIndex(chapter => chapter.id === chapterId);
  breadcrumbEl.textContent = `${index + 1} of ${ALL_CHAPTERS.length} chapters`;
  breadcrumbEl.hidden = false;

  for (const [link, chapter] of [
    [previousChapter, ALL_CHAPTERS[index - 1]],
    [nextChapter, ALL_CHAPTERS[index + 1]],
  ]) {
    link.hidden = !chapter;
    if (chapter) {
      link.href = `#${encodeURIComponent(chapter.id)}`;
      link.querySelector("strong").textContent = chapter.title;
    }
  }
  chapterPagination.hidden = previousChapter.hidden && nextChapter.hidden;
}

/* =====================================================
   LOAD CHAPTER
===================================================== */
async function loadChapter(chapterId) {
  chapterRequest?.abort();
  const request = new AbortController();
  chapterRequest = request;
  breadcrumbEl.hidden = true;
  chapterPagination.hidden = true;

  try {
    const url = `/api/books/${encodeURIComponent(BOOK)}/chapters/${encodeURIComponent(chapterId)}`;
    const res = await fetch(url, { signal: request.signal });
    if (!res.ok) {
      contentEl.textContent = "Failed to load chapter.";
      return;
    }
    const md = await res.text();
    if (request.signal.aborted) return;

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

    contentEl.querySelectorAll("a[href^='#']").forEach(link => {

    const href = decodeURIComponent(link.getAttribute("href")).replace(/^#/, "");
    const parts = href.split("/");

    // CROSS BOOK LINK
    if (parts.length === 2) {
        const [book, chapter] = parts;

        link.addEventListener("click", e => {
          e.preventDefault();
          window.location.href =
            `book.html?book=${encodeURIComponent(book)}#${encodeURIComponent(chapter)}`;
        });

        return;
      }

      // SAME BOOK LINK
      if (parts.length === 1) {
        const chapter = parts[0];

        link.addEventListener("click", e => {
          e.preventDefault();
          location.hash = `#${encodeURIComponent(chapter)}`;
        });
      }

    });

    updateChapterNavigation(chapterId);
    applyReadingLevel();
    applyEquationVisibility();
    window.scrollTo({ top: 0 });

  } catch (err) {
    if (request.signal.aborted) return;
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
    history.replaceState(null, "", `#${encodeURIComponent(initial)}`);
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

const pdfBtn = document.getElementById("pdfBtn");

pdfBtn?.addEventListener("click", () => {
  window.print();
});
