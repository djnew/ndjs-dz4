const {BookService} = require('../service/book.service');

function indexBook(req, res) {
  res.json(
    BookService.getAll()
  );
}

function getBookById(req, res) {
  const book = BookService.getById(req.params.id);
  if (!book) {
    res.status(404);
    res.json({status: '404 Not Found'});
  }else{
    res.json(book);
  }
}

function createBook(req, res) {
  const newBook = BookService.createBook(req.body);
  res.status(201);
  res.json(newBook);
}

function updateBook(req, res) {
  const updateBook = BookService.updateBook(req.params.id, req.body);
  if (!updateBook) {
    res.status(404);
    res.json({status: '404 Not Found'});
  }else{
    res.json(updateBook);
  }
}

function deleteBook(req, res) {
  res.send(BookService.deleteBook(req.params.id));
}

module.exports = {
  indexBook,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};

