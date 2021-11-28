"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const { BookViewController } = require('../controller/book-view.controller.js');
const { multerFile } = require('../middleware/file.js');
const bookViewController = new BookViewController();
const router = {
    bookAdd: {
        path: '/add',
        method: 'get',
        function: bookViewController.viewAddBook
    },
    bookAddPost: {
        path: '/add',
        method: 'post',
        file: multerFile.single('fileBook'),
        function: bookViewController.viewAddBookPost
    },
    bookUpdate: {
        path: '/update/:id',
        method: 'get',
        function: bookViewController.viewUpdateBook
    },
    bookCounter: {
        path: '/counter/:id',
        method: 'get',
        function: bookViewController.viewGetCounter
    },
    bookUpdatePost: {
        path: '/update/:id',
        method: 'post',
        file: multerFile.single('fileBook'),
        function: bookViewController.viewUpdateBookPost
    },
    bookDelete: {
        path: '/delete/:id',
        method: 'post',
        function: bookViewController.viewBookDelete
    },
    bookIndex: {
        path: '/',
        method: 'get',
        function: bookViewController.viewIndexBook
    },
    bookView: {
        path: '/:id',
        method: 'get',
        function: bookViewController.viewBook
    }
};
exports.router = router;
