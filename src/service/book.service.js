const bookStore = require('../store/book.store');
const {BookEntity} = require('../entity/book.entity');
const books = require('../store/book.store');


class BookService {
  static getAll() {
    return bookStore;
  }

  static getById(id) {
    if (!bookStore[id]) {
      return false;
    }
    return bookStore[id];
  }

  static createBook(params) {
    const newBook = new BookEntity({
      title: params.title,
      description: params.description,
      authors: params.authors,
      favorite: params.favorite,
      fileCover: params.fileCover,
      fileName: params.fileName,
    });
    return books[newBook.id] = newBook;
  }

  static updateBook(id, params) {
    if (!books[id]) {
      return false;
    }

    const updateBook = new BookEntity({
      id: id,
      title: params.title,
      description: params.description,
      authors: params.authors,
      favorite: params.favorite,
      fileCover: params.fileCover,
      fileName: params.fileName,
    });
    return books[params.id] = updateBook;
  }

  static deleteBook(id) {
    const result = !!books[id];
    delete books[id];
    return result ? 'ok' : '';
  }
}

module.exports = {BookService};
