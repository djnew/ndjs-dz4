"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const book_service_1 = require("../service/book.service");
const book_container_1 = require("../book.container");
const bookService = book_container_1.bookContainer.get(book_service_1.BookService);
class BookController {
    async indexBook(req, res) {
        const books = await bookService.getAll();
        res.json(books);
    }
    async getBookById(req, res) {
        const book = await bookService.getById(req.params.id);
        if (!book) {
            res.status(404);
            res.json({ status: '404 Not Found' });
        }
        else {
            res.json(book);
        }
    }
    async createBook(req, res) {
        const newBook = await bookService.createBook(req);
        res.status(201);
        res.json(newBook);
    }
    async updateBook(req, res) {
        const updateBook = await bookService.updateBook(req.params.id, req);
        if (!updateBook) {
            res.status(404);
            res.json({ status: '404 Not Found' });
        }
        else {
            res.json(updateBook);
        }
    }
    async deleteBook(req, res) {
        res.send(bookService.deleteBook(req.params.id));
    }
}
exports.BookController = BookController;
