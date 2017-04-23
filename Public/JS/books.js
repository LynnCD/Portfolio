'use strict';

function Book (book_data) {
  this.img = book_data.img;
  this.url = book_data.url;
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

// Project.loadAll = function(project_data) {
//   project_data.sort(function(a,b) {
//     return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
//   });
//
//   project_data.forEach(function(ele) {
//     Project.all.push(new Project(ele));
//   })
// }
//
// Project.fetchAll = function() {
//   if (localStorage.project_data) {
//     Project.loadAll(JSON.parse(localStorage.project_data));
//     // DataView.initIndexPage();
//     } else {
//       $.getJSON('JS/project-data.json').then(function(project_data){
//     Project.loadAll(project_data);
//     // DataView.initIndexPage();
//     localStorage.project_data = JSON.stringify(project_data);
//   })
// }}
