import { BookService } from '../service/book.service'
import { Request, Response } from 'express'
import { container } from '../container'

export class BookController {
  private _bookService: BookService;
  constructor () {
    this._bookService = container.get(BookService)
  }

  async indexBook (req: Request, res: Response) {
    const books = await this._bookService.getAll()
    res.json(
      books
    )
  }

  async getBookById (req: Request, res: Response) {
    const book = await this._bookService.getById(req.params.id)
    if (!book) {
      res.status(404)
      res.json({ status: '404 Not Found' })
    } else {
      res.json(book)
    }
  }

  async createBook (req: Request, res: Response) {
    const newBook = await this._bookService.createBook(req)
    res.status(201)
    res.json(newBook)
  }

  async updateBook (req: Request, res: Response) {
    const updateBook = await this._bookService.updateBook(req.params.id, req)
    if (!updateBook) {
      res.status(404)
      res.json({ status: '404 Not Found' })
    } else {
      res.json(updateBook)
    }
  }

  async deleteBook (req: Request, res: Response) {
    res.send(this._bookService.deleteBook(req.params.id))
  }
}
