const {home} = require('./controller/home.controller');
const {indexBook, getBookById, createBook, updateBook, deleteBook} = require('./controller/book.controller');
const {auth} = require('./controller/auth.controller');

const routes = {
  home: {
    path: '/',
    method: 'get',
    function: home,
  },
  auth: {
    path: '/api/user/login',
    method: 'post',
    function: auth,
  },
  bookIndex: {
    path: '/api/books',
    method: 'get',
    function: indexBook,
  },
  bookGetById: {
    path: '/api/books/:id',
    method: 'get',
    function: getBookById,
  },
  bookCreate: {
    path: '/api/books',
    method: 'post',
    function: createBook,
  },
  bookUpdate: {
    path: '/api/books/:id',
    method: 'put',
    function: updateBook,
  },
  bookDelete: {
    path: '/api/books/:id',
    method: 'delete',
    function: deleteBook,
  },
};

module.exports = routes;
