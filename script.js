'use strict';

const container = document.getElementById('library-container');
const form = document.getElementById('book-form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;

  addBookToLibrary(title, author, pages, read);
  displayLibrary();

  form.reset();
});

const myLibrary = [];

function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.readStatus = function () {};

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

// addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 310, true);
// addBookToLibrary('1984', 'George Orwell', 328, false);

function displayLibrary() {
  container.innerHTML = '';

  myLibrary.forEach(book => {
    const card = document.createElement('div');
    card.classList.add('book-card');
    card.innerHTML = `
    <h3>${book.title}</h3>
    <p>${book.author}</p>
    <p>${book.pages} pages</p>
    <p>${book.read ? 'Read' : 'Not Read'}</p>
    <button class="delete-btn" data-id=${book.id}>Remove</button>`;
    container.appendChild(card);
    const removeButtons = container.querySelectorAll('.delete-btn');
    removeButtons.forEach(btn => {
      btn.addEventListener('click', function (event) {
        const idToRemove = this.getAttribute('data-id');
        removeBookFromLibrary(idToRemove);
        displayLibrary();
      });
    });
  });
}
function removeBookFromLibrary(id) {
  const index = myLibrary.findIndex(book => book.id === id);
  if (index !== -1) {
    myLibrary.splice(index, 1);
  }
}
displayLibrary();
