import { BookService } from '../service/book.service'
import { Request, Response } from 'express'

export class BookController {
  private bookService: BookService;
  constructor () {
    this.bookService = new BookService()
  }

  async indexBook (req: Request, res: Response) {
    const books = await this.bookService.getAll()
    res.json(
      books
    )
  }

  async getBookById (req: Request, res: Response) {
    const book = await this.bookService.getById(req.params.id)
    if (!book) {
      res.status(404)
      res.json({ status: '404 Not Found' })
    } else {
      res.json(book)
    }
  }

  async createBook (req: Request, res: Response) {
    const newBook = await this.bookService.createBook(req)
    res.status(201)
    res.json(newBook)
  }

  async updateBook (req: Request, res: Response) {
    const updateBook = await this.bookService.updateBook(req.params.id, req)
    if (!updateBook) {
      res.status(404)
      res.json({ status: '404 Not Found' })
    } else {
      res.json(updateBook)
    }
  }

  async deleteBook (req: Request, res: Response) {
    res.send(this.bookService.deleteBook(req.params.id))
  }
}
