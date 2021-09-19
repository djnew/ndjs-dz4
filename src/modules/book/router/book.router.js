const multer = require('multer');
const upload = multer({dest:'uploads/',preservePath:true});

const {
  indexBook,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
  downloadBook,
} = require('../controller/book.controller');

const router = {
  bookIndex: {
    path: '/',
    method: 'get',
    function: indexBook,
  },
  bookGetById: {
    path: '/:id',
    method: 'get',
    function: getBookById,
  },
  bookCreate: {
    path: '/',
    method: 'post',
    file: upload.single('fileBook'),
    function: createBook,
  },
  bookUpdate: {
    path: '/:id',
    method: 'put',
    file: upload.single('fileBook'),
    function: updateBook,
  },
  bookDelete: {
    path: '/:id',
    method: 'delete',
    function: deleteBook,
  },
  downloadBook: {
    path: '/:id/download',
    method: 'get',
    function: downloadBook,
  },
};
module.exports = {router};
