import { BookService } from '../service/book.service'
import { BookModel } from '../model/book.model'
import { bookContainer } from '../book.container'
import { Request, Response } from 'express'

const bookService = bookContainer.get<BookService>(BookService)
class BookViewController {
  async viewIndexBook (req: Request, res: Response) {
    const books = await bookService.getAll()
    res.render('book/index', {
      title: 'Библиотека - список книг',
      books: books
    })
  }

  async viewAddBookPost (req: Request, res: Response) {
    const newBook = await bookService.createBook(req)
    if (newBook) {
      res.status(201)
      res.redirect(`/library/${newBook.id}`)
    } else {
      res.status(500)
      res.json({ message: 'что-то случилось с сервером' })
    }
  }

  async viewUpdateBook (req: Request, res: Response) {
    const book = await bookService.getById(req.params.id)
    if (!book) {
      res.status(404)
      res.render('404', {
        title: 'Библиотека - 404 Not Found'
      })
    } else {
      res.render('book/update', {
        title: `Библиотека - редактирование книги ${book.book.title}, ${book.book.authors}`,
        book: book.book,
        shows: book.shows
      })
    }
  }

  async viewUpdateBookPost (req: Request, res: Response) {
    const updateBook = await bookService.updateBook(req.params.id, req)
    if (!updateBook) {
      res.status(404)
      res.render('404', {
        title: 'Библиотека - 404 Not Found'
      })
    } else {
      res.redirect(`/library/${updateBook.id}`)
    }
  }

  async viewBook (req: Request, res: Response) {
    const book = await bookService.getById(req.params.id, true)
    if (!book) {
      res.status(404)
      res.render('404', {
        title: 'Библиотека - 404 Not Found'
      })
    } else {
      res.render('book/show', {
        title: `Библиотека - ${book.book.title}, ${book.book.authors}`,
        book: book.book,
        shows: book.shows
      })
    }
  }

  viewAddBook (req: Request, res: Response) {
    res.render('book/add', {
      title: 'Библиотека - добавить книгу',
      book: new BookModel()
    })
  }

  async viewBookDelete (req: Request, res: Response) {
    const result = await bookService.deleteBook(req.params.id)
    if (!result) {
      res.status(404)
      res.render('404', {
        title: 'Библиотека - 404 Not Found'
      })
    } else {
      res.redirect('/library')
    }
  }
}

export { BookViewController }
