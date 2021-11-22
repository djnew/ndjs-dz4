"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRepository = void 0;
const book_model_1 = require("../model/book.model");
class BookRepository {
    async createBook(book) {
        const newBook = new book_model_1.BookModel(book);
        try {
            await newBook.save();
            return newBook;
        }
        catch (e) {
            console.error(e);
            return false;
        }
    }
    async deleteBook(id) {
        try {
            await book_model_1.BookModel.deleteOne({ _id: id });
            return 'ok';
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }
    async getBook(id) {
        try {
            return book_model_1.BookModel.findById(id);
        }
        catch (e) {
            console.error(e);
            return false;
        }
    }
    async getBooks() {
        return book_model_1.BookModel.find().select('-__v');
    }
    async updateBook(id, params) {
        try {
            return book_model_1.BookModel.findByIdAndUpdate(id, params);
        }
        catch (e) {
            return false;
        }
    }
}
exports.BookRepository = BookRepository;
