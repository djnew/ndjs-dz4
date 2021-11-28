import { BookService } from '../service/book.service'
import { Request, Response } from 'express'
import { bookContainer } from '../book.container'

const bookService = bookContainer.get<BookService>(BookService)

export class BookController {
  async indexBook (req: Request, res: Response) {
    const books = await bookService.getAll()
    res.json(
      books
    )
  }

  async getBookById (req: Request, res: Response) {
    const book = await bookService.getById(req.params.id)
    if (!book) {
      res.status(404)
      res.json({ status: '404 Not Found' })
    } else {
      res.json(book)
    }
  }

  async createBook (req: Request, res: Response) {
    const newBook = await bookService.createBook(req)
    res.status(201)
    res.json(newBook)
  }

  async updateBook (req: Request, res: Response) {
    const updateBook = await bookService.updateBook(req.params.id, req)
    if (!updateBook) {
      res.status(404)
      res.json({ status: '404 Not Found' })
    } else {
      res.json(updateBook)
    }
  }

  async deleteBook (req: Request, res: Response) {
    res.send(bookService.deleteBook(req.params.id))
  }
}
