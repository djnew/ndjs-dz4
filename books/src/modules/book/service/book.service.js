const {BookModel} = require('../model/book.model');
const axios = require('axios');

const url = process.env.COUNTER_URL || 'localhost';
const port = process.env.COUNTER_PORT || 5000;

class BookService {
  static async getAll() {
    return BookModel.find().select('-__v');
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
    try {
      const book = await BookModel.findById(id);
      let shows;
      if (incr) {
        shows = await this.incrCounter(id);
      } else {
        shows = await this.getCounter(id);
      }

      return {
        book: book,
        shows: shows ? shows : 0,
      };
    } catch (e) {
      console.error(e)
      return false;
    }
  }

  static async createBook(params) {
    let bookFile = {
      fileBook: '',
      bookFile: ''
    };
    if (params.file !== undefined) {
      bookFile = {fileBook: params.file.path, fileName: params.file.originalname};
    }
    const bookProps = {
      title: params.body.title,
      description: params.body.description,
      authors: params.body.authors,
      favorite: params.body.favorite,
      fileCover: params.body.fileCover,
    };
    const newBook = new BookModel(Object.assign(bookProps, bookFile));
    try {
      await newBook.save();
      return newBook;
    } catch (e) {
      console.error(e);
      return false
    }
  }

  static async updateBook(id, params) {
    try{
      let bookFile = {
        fileBook: '',
        bookFile: ''
      };
      if (params.file !== undefined) {
        bookFile = {fileBook: params.file.path, fileName: params.file.originalname};
      }

      const bookProps = {
        title: params.body.title,
        description: params.body.description,
        authors: params.body.authors,
        favorite: params.body.favorite,
        fileCover: params.body.fileCover,
      };

      return await BookModel.findByIdAndUpdate(id, Object.assign(bookProps, bookFile));
    }catch (e){
      console.log(e);
      return false
    }
  }

  static async deleteBook(id) {
    try {
      await BookModel.deleteOne({_id: id});
      return 'ok';
    }catch (e) {
      console.log(e);
      return false
    }
  }

  static downloadBook(id) {
    if (!books[id]) {
      return false;
    }
    return books[id].fileBook;
  }
}

module.exports = {BookService};
