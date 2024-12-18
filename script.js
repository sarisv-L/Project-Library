'use strict';

const myLibrary = [];
const bookBtn = document.getElementById('bookBtn');
const addBtn = document.getElementById('addBtn');
const inputDiv = document.getElementById('inputField');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  // this.info = function () {
  //   return `${this.title}, ${this.author}, ${this.pages}, ${this.read} `;
  // };
}

// const newBook = new Book(
//   'The Hobbit',
//   'J.R.R. Tolkien',
//   '297 pages',
//   'not yet read!'
// );

function addBookToLibrary(title, author, pages) {
  const newBook = new Book(title, author, pages);
  myLibrary.push(newBook);
  return newBook;
}

addBookToLibrary('The hobbit', 'J.R.R. Tolkien', '297');
addBookToLibrary('Dracula', 'Bram Stoker', '397');
addBookToLibrary('The Silmarillion', 'J.R.R.Tolkien', '467');
addBookToLibrary('The Grapes of Wrath', 'John Steinbeck', '476');

function populateTable(data) {
  const tableBody = document.querySelector('#myTable tbody');
  data.forEach(item => {
    const row = document.createElement('tr');
    Object.values(item).forEach(value => {
      const cell = document.createElement('td');
      cell.textContent = value;
      row.appendChild(cell);
    });
    tableBody.appendChild(row);
  });
}

populateTable(myLibrary);

// New Book Button shows and hides input field where user can input values
bookBtn.addEventListener('click', () => {
  inputDiv.style.display = inputDiv.style.display === 'none' ? 'block' : 'none';
});

addBtn.addEventListener('click', () => {
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const pages = document.getElementById('pages');

  const addedBook = {
    title: title.value,
    author: author.value,
    pages: pages.value,
  };
  if (title.value === '' || author.value === '' || pages.value === '') {
    alert('Please fill in all the fields.');
  } else {
    addBookToLibrary(title.value, author.value, pages.value);
    populateTable(myLibrary.slice(-1));
    title.value = '';
    author.value = '';
    pages.value = '';
    inputDiv.style.display = 'none';
  }
});
