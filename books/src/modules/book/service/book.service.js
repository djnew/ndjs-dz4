const bookStore = require('../store/book.store');
const {BookEntity} = require('../entity/book.entity');
const books = require('../store/book.store');
const axios = require('axios');

const url = process.env.COUNTER_URL || 'localhost';
const port = process.env.COUNTER_PORT || 5000;

  class BookService {
  static getAll() {
    return bookStore;
  }

  static async incrCounter(id) {
    console.log(`incr ${url}:${port}/counter/${id}/incr`)
    try {
      const {data} = await axios.get(`${url}:${port}/counter/${id}/incr`);
      return data.counter || false;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  static async getCounter(id) {
    console.log(`get ${url}:${port}/counter/${id}`)
    try {
      const {data} = await axios.get(`${url}:${port}/counter/${id}`);
      return data.counter || false;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  static async getById(id, incr = false) {
    if (!bookStore[id]) {
      return false;
    }
    let shows;
    if (incr) {
      shows = await this.incrCounter(id);
    } else {
      shows = await this.getCounter(id);
    }

    return {
      book: bookStore[id],
      shows: shows ? shows : 0,
    };
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

    if (params.file !== undefined) {
      newBook.bookFill({fileBook: params.file.path, fileName: params.file.originalname});
    }

    return books[newBook.id] = newBook;
  }

  static async updateBook(id, params) {
    if (!books[id]) {
      return false;
    }

    const updateBook = books[id];
    updateBook.bookFill(params.body);
    if (params.file !== undefined) {
      updateBook.bookFill({fileBook: params.file.path, fileName: params.file.originalname});
    }
    return updateBook;
  }

  static deleteBook(id) {
    const result = !!books[id];
    delete books[id];
    return result ? 'ok' : '';
  }

  static downloadBook(id) {
    if (!books[id]) {
      return false;
    }
    return books[id].fileBook;
  }
}

module.exports = {BookService};
