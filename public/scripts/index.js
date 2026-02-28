// public/index.js
const booksEl = document.getElementById("books");
const errorEl = document.getElementById("error");

function bookEmoji(name) {
  const n = name.toLowerCase();
  if (n.includes("astro")) return "🔭";
  if (n.includes("exo")) return "🪐";
  if (n.includes("phys")) return "⚛️";
  return "📚";
}

async function loadBooks() {
  try {
    const res = await fetch("/api/books");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const books = await res.json();

    booksEl.innerHTML = "";
    books.forEach((b) => {
      const a = document.createElement("a");
      a.className = "card";
      a.href = `/book.html?book=${encodeURIComponent(b)}`;
      a.innerHTML = `
        <div class="emoji">${bookEmoji(b)}</div>
        <div class="title">${b}</div>
        <div class="meta">Open book →</div>
      `;
      booksEl.appendChild(a);
    });
  } catch (err) {
    errorEl.hidden = false;
    errorEl.textContent = `Failed to load books: ${err.message}`;
  }
}

loadBooks();