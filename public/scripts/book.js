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

const readerbar = document.querySelector(".readerbar");
const chapterSelect = document.getElementById("chapterSelect");
const toolbarPrevious = document.getElementById("toolbarPrevious");
const toolbarNext = document.getElementById("toolbarNext");
const readingProgress = document.getElementById("readingProgress");
const findBtn = document.getElementById("findBtn");
const findPanel = document.getElementById("findPanel");
const chapterFind = document.getElementById("chapterFind");
const findStatus = document.getElementById("findStatus");
const findResults = document.getElementById("findResults");
let focusedPassage;

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
  setupHeaderPanel(settingsBtn, settingsPanel);
  setupHeaderPanel(findBtn, findPanel, chapterFind);
  setupReaderToolbar();
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

function setupHeaderPanel(button, panel, initialFocus) {

  function setOpen(open) {
    panel.hidden = !open;
    button.setAttribute("aria-expanded", String(open));
  }

  button.addEventListener("click", () => {
    setOpen(panel.hidden);
    if (!panel.hidden) initialFocus?.focus();
  });

  document.addEventListener("click", (e) => {
    if (panel.contains(e.target) || button.contains(e.target)) return;
    setOpen(false);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !panel.hidden) {
      setOpen(false);
      button.focus();
    }
  });
}

function setupReaderToolbar() {
  chapterSelect.replaceChildren(...ALL_CHAPTERS.map(chapter => new Option(chapter.title, chapter.id)));
  document.getElementById("readerChapters").hidden = !ALL_CHAPTERS.length;
  chapterSelect.addEventListener("change", () => {
    location.hash = encodeURIComponent(chapterSelect.value);
  });
  toolbarPrevious.addEventListener("click", () => previousChapter.click());
  toolbarNext.addEventListener("click", () => nextChapter.click());

  const textSize = document.getElementById("textSize");
  const savedSize = localStorage.getItem("bookTextSize");
  if (Array.from(textSize.options).some(option => option.value === savedSize)) {
    textSize.value = savedSize;
  }
  const applyTextSize = () => {
    contentEl.dataset.textSize = textSize.value;
  };
  applyTextSize();
  textSize.addEventListener("change", () => {
    localStorage.setItem("bookTextSize", textSize.value);
    applyTextSize();
  });

  chapterFind.addEventListener("input", updateFindResults);
  window.addEventListener("scroll", updateReadingProgress, { passive: true });
  const observer = new ResizeObserver(() => {
    document.documentElement.style.setProperty("--reader-offset", readerbar.offsetHeight + "px");
    updateReadingProgress();
  });
  observer.observe(readerbar);
  observer.observe(contentEl);
}

function updateReadingProgress() {
  if (readingProgress.hidden) return;

  const chapter = contentEl.getBoundingClientRect();
  const visibleTop = readerbar.getBoundingClientRect().bottom;
  const viewportHeight = window.innerHeight;
  if (chapter.bottom <= viewportHeight) {
    readingProgress.value = 100;
    return;
  }
  const scrollableHeight = chapter.height - (viewportHeight - visibleTop);
  readingProgress.value = scrollableHeight > 0
    ? 100 * (visibleTop - chapter.top) / scrollableHeight
    : 0;
}

function clearFocusedPassage() {
  focusedPassage?.classList.remove("find-passage");
  focusedPassage = undefined;
}

function updateFindResults() {
  clearFocusedPassage();
  findResults.replaceChildren();
  findStatus.textContent = "";
  const query = chapterFind.value.trim().toLowerCase();
  if (!query || findBtn.disabled) return;

  const passages = contentEl.querySelectorAll("h1, h2, h3, h4, p, li, td, th, pre, figcaption");
  let count = 0;
  for (const passage of passages) {
    if (!passage.getClientRects().length || passage.closest("[aria-hidden=true]")) continue;

    const text = passage.innerText.replace(/\s+/g, " ").trim();
    const offset = text.toLowerCase().indexOf(query);
    if (offset < 0) continue;

    const start = Math.max(0, offset - 36);
    const end = Math.min(text.length, offset + query.length + 72);
    const item = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    const mark = document.createElement("mark");
    mark.textContent = text.slice(offset, offset + query.length);
    button.append(
      (start ? "…" : "") + text.slice(start, offset),
      mark,
      text.slice(offset + query.length, end) + (end < text.length ? "…" : "")
    );
    button.addEventListener("click", () => {
      findPanel.hidden = true;
      findBtn.setAttribute("aria-expanded", "false");
      clearFocusedPassage();
      focusedPassage = passage;
      passage.classList.add("find-passage");
      findBtn.focus({ preventScroll: true });
      passage.scrollIntoView({ block: "center" });
    });
    item.append(button);
    findResults.append(item);
    count++;
  }
  findStatus.textContent = count ? count + (count === 1 ? " matching passage" : " matching passages") : "No matching passages.";
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
  if (chapterId) chapterSelect.value = chapterId;
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
  toolbarPrevious.disabled = previousChapter.hidden;
  toolbarNext.disabled = nextChapter.hidden;
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
  toolbarPrevious.disabled = true;
  toolbarNext.disabled = true;
  findPanel.hidden = true;
  findBtn.setAttribute("aria-expanded", "false");
  findBtn.disabled = true;
  chapterFind.value = "";
  updateFindResults();
  readingProgress.hidden = true;

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
    findBtn.disabled = false;
    readingProgress.hidden = false;
    updateReadingProgress();

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
    updateFindResults();
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
      updateFindResults();
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
