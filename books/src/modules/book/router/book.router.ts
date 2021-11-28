import { BookController } from '../controller/book.controller'
import { RouterKeyType } from './router.types'

const { multerFile } = require('../middleware/file.js')

const bookController = new BookController()

const router: RouterKeyType = {
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
    file: multerFile.single('fileBook'),
    function: bookController.createBook
  },
  bookUpdate: {
    path: '/:id',
    method: 'put',
    file: multerFile.single('fileBook'),
    function: bookController.updateBook
  },
  bookDelete: {
    path: '/:id',
    method: 'delete',
    function: bookController.deleteBook
  }
}
export { router }
