const { BookService } = require('../service/book.service')
const { BookModel } = require('../model/book.model')
const { container } = require('../container')

const bookService = container.get(BookService)
async function viewIndexBook (req, res) {
  const books = await bookService.getAll()
  res.render('book/index', {
    title: 'Библиотека - список книг',
    books: books
  })
}

async function viewAddBookPost (req, res) {
  const newBook = await bookService.createBook(req)
  if (newBook) {
    res.status(201)
    res.redirect(`/library/${newBook.id}`)
  } else {
    res.status(500)
    res.json({ message: 'что-то случилось с сервером' })
  }
}

async function viewGetCounter (req, res) {
  const book = await bookService.getById(req.params.id)
  if (!book) {
    res.status(404)
    res.render('404', {
      title: 'Библиотека - 404 Not Found'
    })
  }
}

async function viewUpdateBook (req, res) {
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

async function viewUpdateBookPost (req, res) {
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

async function viewBook (req, res) {
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

function viewAddBook (req, res) {
  res.render('book/add', {
    title: 'Библиотека - добавить книгу',
    book: new BookModel()
  })
}

function viewBookDelete (req, res) {
  const result = bookService.deleteBook(req.params.id)
  if (!result) {
    res.status(404)
    res.render('404', {
      title: 'Библиотека - 404 Not Found'
    })
  } else {
    res.redirect('/library')
  }
}

module.exports = {
  viewIndexBook,
  viewBook,
  viewAddBook,
  viewBookDelete,
  viewAddBookPost,
  viewUpdateBookPost,
  viewUpdateBook,
  viewGetCounter
}
