const {BookService} = require('../service/book.service');
const path = require('path');

function indexBook(req, res) {
  res.json(
    BookService.getAll(),
  );
}

function getBookById(req, res) {
  const book = BookService.getById(req.params.id);
  if (!book) {
    res.status(404);
    res.json({status: '404 Not Found'});
  } else {
    res.json(book);
  }
}

async function createBook(req, res) {
  const newBook = await BookService.createBook(req);
  res.status(201);
  res.json(newBook);
}

async function updateBook(req, res) {
  const updateBook = await BookService.updateBook(req.params.id, req.body);
  if (!updateBook) {
    res.status(404);
    res.json({status: '404 Not Found'});
  } else {
    res.json(updateBook);
  }
}

function deleteBook(req, res) {
  res.send(BookService.deleteBook(req.params.id));
}

function downloadBook(req, res) {
  const filePath = BookService.downloadBook(req.params.id);
  if (!filePath) {
    res.status(404);
    res.json({status: '404 Not Found'});
  } else {
    const pathFromRoot = path.join(__dirname, '../../../../public', filePath);

    res.download(`${pathFromRoot}`, null, err => {
        if (err) {
          res.status(404).json();
        }
      },
    );
  }
}

module.exports = {
  indexBook,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
  downloadBook,
};

