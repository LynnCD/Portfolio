'use strict';

function Book (book_data) {
  this.img = book_data.img;
  this.url = book_data.url;
  this.dateAdded = book_data.dateAdded;
  this.daysAgo = parseInt((new Date() - new Date(this.dateAdded))/1000/60/60/24);
}

Book.prototype.toHtml = function() {
  let source   = $('#book-template').html();
  let template = Handlebars.compile(source);
  return template(this);
}

$.getJSON('/Public/DATA/BookData.json', function(bookData) {
  bookData.forEach(function(bookObject) {
    let book = new Book(bookObject);
    $('#books').append(book.toHtml());
  });
});

Book.fetchAll = function() {
  if (localStorage.bookData) {
    Book.loadAll(JSON.parse(localStorage.bookData));
  } else {
    $.getJSON('DATA/bookData.json').then(function(book_data){
      Book.loadAll(book_data);
      localStorage.project_data = JSON.stringify(book_data);
    })
  }}
