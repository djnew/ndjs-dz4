const {BookService} = require('../service/book.service');
const {BookEntity} = require('../entity/book.entity');


function viewIndexBook(req, res) {
  res.render('book/index', {
    title: 'Библиотека - список книг',
    books: BookService.getAll(),
  });
}

async function viewAddBookPost(req, res) {
  const newBook = await BookService.createBook(req);
  res.status(201);
  res.redirect(`/library/${newBook.id}`);
}

async function viewGetCounter(req, res) {
  const book = await BookService.getById(req.params.id);
  if (!book) {
    res.status(404);
    res.render('404', {
      title: `Библиотека - 404 Not Found`,
    });
  }
}

async function viewUpdateBook(req, res) {
  const book = await BookService.getById(req.params.id);
  if (!book) {
    res.status(404);
    res.render('404', {
      title: `Библиотека - 404 Not Found`,
    });
  } else {
    res.render('book/update', {
      title: `Библиотека - редактирование книги ${book.book.title}, ${book.book.authors}`,
      book: book.book,
      shows: book.shows
    });
  }
}

async function viewUpdateBookPost(req, res) {
  const updateBook = await BookService.updateBook(req.params.id, req);
  if (!updateBook) {
    res.status(404);
    res.render('404', {
      title: `Библиотека - 404 Not Found`,
    });
  } else {
    res.redirect(`/library/${updateBook.id}`);
  }
}

async function viewBook(req, res) {
  const book = await BookService.getById(req.params.id, true);
  if (!book) {
    res.status(404);
    res.render('404', {
      title: `Библиотека - 404 Not Found`,
    });
  } else {
    res.render('book/show', {
      title: `Библиотека - ${book.book.title}, ${book.book.authors}`,
      book: book.book,
      shows: book.shows
    });
  }
}

function viewAddBook(req, res) {
  res.render('book/add', {
    title: `Библиотека - добавить книгу`,
    book: new BookEntity(),
  });
}

function viewBookDelete(req, res) {
  const result = BookService.deleteBook(req.params.id);
  if (!result) {
    res.status(404);
    res.render('404', {
      title: `Библиотека - 404 Not Found`,
    });
  } else {
    res.redirect(`/library`);
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
  viewGetCounter,
};
