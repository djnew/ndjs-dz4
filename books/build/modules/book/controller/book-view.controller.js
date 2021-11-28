"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookViewController = void 0;
const book_service_1 = require("../service/book.service");
const book_model_1 = require("../model/book.model");
const book_container_1 = require("../book.container");
const bookService = book_container_1.bookContainer.get(book_service_1.BookService);
class BookViewController {
    async viewIndexBook(req, res) {
        const books = await bookService.getAll();
        res.render('book/index', {
            title: 'Библиотека - список книг',
            books: books
        });
    }
    async viewAddBookPost(req, res) {
        const newBook = await bookService.createBook(req);
        if (newBook) {
            res.status(201);
            res.redirect(`/library/${newBook.id}`);
        }
        else {
            res.status(500);
            res.json({ message: 'что-то случилось с сервером' });
        }
    }
    async viewGetCounter(req, res) {
        const book = await bookService.getById(req.params.id);
        if (!book) {
            res.status(404);
            res.render('404', {
                title: 'Библиотека - 404 Not Found'
            });
        }
    }
    async viewUpdateBook(req, res) {
        const book = await bookService.getById(req.params.id);
        if (!book) {
            res.status(404);
            res.render('404', {
                title: 'Библиотека - 404 Not Found'
            });
        }
        else {
            res.render('book/update', {
                title: `Библиотека - редактирование книги ${book.book.title}, ${book.book.authors}`,
                book: book.book,
                shows: book.shows
            });
        }
    }
    async viewUpdateBookPost(req, res) {
        const updateBook = await bookService.updateBook(req.params.id, req);
        if (!updateBook) {
            res.status(404);
            res.render('404', {
                title: 'Библиотека - 404 Not Found'
            });
        }
        else {
            res.redirect(`/library/${updateBook.id}`);
        }
    }
    async viewBook(req, res) {
        const book = await bookService.getById(req.params.id, true);
        if (!book) {
            res.status(404);
            res.render('404', {
                title: 'Библиотека - 404 Not Found'
            });
        }
        else {
            res.render('book/show', {
                title: `Библиотека - ${book.book.title}, ${book.book.authors}`,
                book: book.book,
                shows: book.shows
            });
        }
    }
    viewAddBook(req, res) {
        res.render('book/add', {
            title: 'Библиотека - добавить книгу',
            book: new book_model_1.BookModel()
        });
    }
    async viewBookDelete(req, res) {
        const result = await bookService.deleteBook(req.params.id);
        if (!result) {
            res.status(404);
            res.render('404', {
                title: 'Библиотека - 404 Not Found'
            });
        }
        else {
            res.redirect('/library');
        }
    }
}
exports.BookViewController = BookViewController;
