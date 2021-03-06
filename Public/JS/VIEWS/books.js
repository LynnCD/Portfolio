'use strict';

(function(module){
  function Book(BookData) {
    Object.keys(BookData).forEach(key => this[key] = BookData[key]);
  }

  Book.all = [];

  Book.prototype.toHtml = function() {
    let template = Handlebars.compile($('#book-template').html());
    this.daysAgo = parseInt((new Date() - new Date(this.dateAdded))/1000/60/60/24);
    return template(this);
  }

  $.getJSON('/Public/DATA/BookData.json', function(bookData) {
    bookData.forEach(function(bookObject) {
      let book = new Book(bookObject);
      $('#books').append(book.toHtml());
    });

    Book.all = bookData.map(function (bookObject) {
      return new Book(bookObject);
    });
  });

  // Book.loadAll = function(BookData) {
  //   BookData.forEach(function(ele) {
  //     Book.all.push(new Book(ele));
  //   });
  // };

  Book.fetchAll = function() {
    if (localStorage.bookData) {
      Book.loadAll(JSON.parse(localStorage.bookData));
    } else {
      $.getJSON('DATA/bookData.json').then(function(book_data){
        Book.loadAll(book_data);
        Book.all.forEach(function(bookObject) {
          let book = new Book(bookObject);
          $('#books').append(book.toHtml());
        });
        localStorage.project_data = JSON.stringify(book_data);
      })
    }}
  Book.fetchAll();
})(window);
