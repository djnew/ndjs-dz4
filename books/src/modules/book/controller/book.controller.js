"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const book_service_1 = require("../service/book.service");
class BookController {
    constructor() {
        this.bookService = new book_service_1.BookService();
    }
    async indexBook(req, res) {
        const books = await this.bookService.getAll();
        res.json(books);
    }
    async getBookById(req, res) {
        const book = await this.bookService.getById(req.params.id);
        if (!book) {
            res.status(404);
            res.json({ status: '404 Not Found' });
        }
        else {
            res.json(book);
        }
    }
    async createBook(req, res) {
        const newBook = await this.bookService.createBook(req);
        res.status(201);
        res.json(newBook);
    }
    async updateBook(req, res) {
        const updateBook = await this.bookService.updateBook(req.params.id, req);
        if (!updateBook) {
            res.status(404);
            res.json({ status: '404 Not Found' });
        }
        else {
            res.json(updateBook);
        }
    }
    async deleteBook(req, res) {
        res.send(this.bookService.deleteBook(req.params.id));
    }
}
exports.BookController = BookController;
