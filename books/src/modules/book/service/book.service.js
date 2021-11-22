"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const book_repository_1 = require("../repository/book.repository");
const axios_1 = __importDefault(require("axios"));
const url = process.env.COUNTER_URL || 'localhost';
const port = process.env.COUNTER_PORT || 5000;
class BookService {
    constructor() {
        this.bookRepository = new book_repository_1.BookRepository();
    }
    async getAll() {
        return this.bookRepository.getBooks();
    }
    async incrCounter(id) {
        console.log(`incr ${url}:${port}/counter/${id}/incr`);
        try {
            const { data } = await axios_1.default.get(`${url}:${port}/counter/${id}/incr`);
            return data.counter || false;
        }
        catch (e) {
            console.error(e);
            return false;
        }
    }
    async getCounter(id) {
        console.log(`get ${url}:${port}/counter/${id}`);
        try {
            const { data } = await axios_1.default.get(`${url}:${port}/counter/${id}`);
            return data.counter || false;
        }
        catch (e) {
            console.error(e);
            return false;
        }
    }
    async getById(id, incr = false) {
        const book = await this.bookRepository.getBook(id);
        let shows;
        if (book) {
            if (incr) {
                shows = await this.incrCounter(id);
            }
            else {
                shows = await this.getCounter(id);
            }
            return {
                book: book,
                shows: shows || 0
            };
        }
        return false;
    }
    async createBook(params) {
        let bookFile = {
            fileBook: '',
            fileName: ''
        };
        if (params.file !== undefined) {
            bookFile = { fileBook: params.file.path, fileName: params.file.originalname };
        }
        const bookProps = {
            title: params.body.title,
            description: params.body.description,
            authors: params.body.authors,
            favorite: params.body.favorite,
            fileCover: params.body.fileCover
        };
        return await this.bookRepository.createBook({ ...bookProps, ...bookFile });
    }
    async updateBook(id, params) {
        let bookFile = {
            fileBook: '',
            fileName: ''
        };
        if (params.file !== undefined) {
            bookFile = { fileBook: params.file.path, fileName: params.file.originalname };
        }
        const bookProps = {
            title: params.body.title,
            description: params.body.description,
            authors: params.body.authors,
            favorite: params.body.favorite,
            fileCover: params.body.fileCover
        };
        const updateBook = await this.bookRepository.updateBook(id, { ...bookProps, ...bookFile });
        if (updateBook) {
            return updateBook;
        }
        return false;
    }
    async deleteBook(id) {
        return this.bookRepository.deleteBook(id);
    }
}
exports.BookService = BookService;
