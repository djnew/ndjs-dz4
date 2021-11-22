import { BookController } from '../controller/book.controller'

const fileMiddleware = require('../middleware/file')

const bookController = new BookController()
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
}
export { router }
