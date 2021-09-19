const bookStore = require('../store/book.store');
const {BookEntity} = require('../entity/book.entity');
const books = require('../store/book.store');
const {BookFileService} = require('../service/book-file.service');

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

  static async createBook(params) {
    const newBook = new BookEntity({
      title: params.body.title,
      description: params.body.description,
      authors: params.body.authors,
      favorite: params.body.favorite,
      fileCover: params.body.fileCover,
      fileName: params.body.fileName,
    });

    if(params.file !== undefined) {
      const bookFilePath = await BookFileService.uploadFile(params.file, newBook.id)

      if(bookFilePath){
        newBook.bookFill({fileBook: bookFilePath})
      }
    }

    return books[newBook.id] = newBook;
  }

  static async updateBook(id, params) {
    if (!books[id]) {
      return false;
    }

    const updateBook = books[id];
    updateBook.bookFill(params);
    if(params.file !== undefined) {
      const bookFilePath = await BookFileService.uploadFile(params.file, id)

      if(bookFilePath){
        updateBook.bookFill({fileBook: bookFilePath})
      }
    }
    return updateBook;
  }

  static deleteBook(id) {
    const result = !!books[id];
    delete books[id];
    return result ? 'ok' : '';
  }
  static downloadBook(id) {
    if(!books[id]){
      return false;
    }
     return books[id].fileBook
  }
}

module.exports = {BookService};
