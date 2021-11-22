"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const book_controller_1 = require("../controller/book.controller");
const fileMiddleware = require('../middleware/file');
const bookController = new book_controller_1.BookController();
const router = {
    bookIndex: {
        path: '/',
        method: 'get',
        function: bookController.indexBook
    },
    bookGetById: {
        path: '/:id',
        method: 'get',
        function: bookController.getBookById
    },
    bookCreate: {
        path: '/',
        method: 'post',
        file: fileMiddleware.single('fileBook'),
        function: bookController.createBook
    },
    bookUpdate: {
        path: '/:id',
        method: 'put',
        file: fileMiddleware.single('fileBook'),
        function: bookController.updateBook
    },
    bookDelete: {
        path: '/:id',
        method: 'delete',
        function: bookController.deleteBook
    }
};
exports.router = router;
