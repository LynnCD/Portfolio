'use strict';

(function(module){
  function Book(BookData) {
    Object.keys(BookData).forEach(key => this[key] = BookData[key]);
  }

  Book.all = [];

  Book.prototype.toHtml = () => {
    let template = Handlebars.compile($('#book-template').html());
    this.daysAgo = parseInt((new Date() - new Date(this.dateAdded))/1000/60/60/24);
    return template(this);
  }

  Book.loadAll = rows => {Book.all = rows.map(row => new Book(row));};

  Book.fetchAll = callback => {
    if (localStorage.BookData){
      Book.loadAll(JSON.parse(localStorage.BookData));}
    else {
      $.getJSON('DATA/bookData.json').then(
          book_data => {
            Book.loadAll(book_data);
            localStorage.BookData = JSON.stringify(book_data);
            callback();
          });
    }
  };

  module.Book = Book;
})(window);
