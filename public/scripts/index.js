// public/index.js
const booksEl = document.getElementById("books");
const errorEl = document.getElementById("error");

async function loadBooks() {
  try {
    const res = await fetch("/api/books");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const books = await res.json();

    booksEl.innerHTML = "";

    books.forEach((b) => {

      const cover = `/books/${b}/coverPage/frontpage.png`;

      const a = document.createElement("a");
      a.className = "card";
      a.href = `/book.html?book=${encodeURIComponent(b)}`;

      a.innerHTML = `
        <div class="cover">
          <img src="${cover}" alt="${b} cover">
        </div>
        <div class="title">${b}</div>
      `;

      booksEl.appendChild(a);
    });

  } catch (err) {
    errorEl.hidden = false;
    errorEl.textContent = `Failed to load books: ${err.message}`;
  }
}

loadBooks();

books.forEach((b) => {

  const cover = `/books/${b}/coverPage/frontpage.png`;

  const a = document.createElement("a");
  a.className = "card book-card";
  a.href = `/book.html?book=${encodeURIComponent(b)}`;

  a.innerHTML = `
  
    <div class="book">

      <div class="book-cover">
        <img src="${cover}" />
      </div>

      <div class="book-pages">
        <div class="page"></div>
        <div class="page"></div>
        <div class="page"></div>
      </div>

    </div>

    <div class="title">${b}</div>
  `;

  booksEl.appendChild(a);
});