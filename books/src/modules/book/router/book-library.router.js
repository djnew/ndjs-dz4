const {viewIndexBook, viewBook, viewAddBook, viewBookDelete, viewAddBookPost, viewUpdateBook, viewUpdateBookPost,
  viewGetCounter
} = require('../controller/book-view.controller');
const fileMiddleware = require('../middleware/file');

const router = {
  bookAdd: {
    path: '/add',
    method: 'get',
    function: viewAddBook,
  },
  bookAddPost: {
    path: '/add',
    method: 'post',
    file: fileMiddleware.single('fileBook'),
    function: viewAddBookPost,
  },
  bookUpdate: {
    path: '/update/:id',
    method: 'get',
    function: viewUpdateBook,
  },
  bookCounter:{
    path: '/counter/:id',
    method: 'get',
    function: viewGetCounter
  },
  bookUpdatePost: {
    path: '/update/:id',
    method: 'post',
    file: fileMiddleware.single('fileBook'),
    function: viewUpdateBookPost,
  },
  bookDelete: {
    path: '/delete/:id',
    method: 'post',
    function: viewBookDelete,
  },
  bookIndex: {
    path: '/',
    method: 'get',
    function: viewIndexBook,
  },
  bookView: {
    path: '/:id',
    method: 'get',
    function: viewBook,
  },
};

module.exports = {router};
