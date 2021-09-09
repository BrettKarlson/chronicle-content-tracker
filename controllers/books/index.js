const book = require('../../models').book;

exports.books = function(res) {
  return book
    .findAll()
    .then( (books) => {
      const bookList = [];
      books.forEach( (book) => {
        bookList.push(book.dataValues)
      })
      return bookList;
    })
    .then( (bookList) => res.render( "books/index", {bookList: bookList, title: "Book List"}));
};