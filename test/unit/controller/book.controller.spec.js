/**
 * Tests home controller
 *
 * @group unit/controller/book
 */
const {
  indexBook,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} = require('../../../src/controller/book.controller');
const books = require('../../../src/store/book.store');
const bookKeys = Object.keys(books);

let req;
let res;
beforeEach(() => {
  req = {
    params: {},
    body: {},
  };
  res = {
    json: jest.fn(),
    status: jest.fn(),
    send: jest.fn()
  };
  return {req, res};
});

const status404 = {status: '404 Not Found'};
const newBook = {
  title: 'test create/update',
  description: 'test description',
  authors: 'test authors',
  favorite: 'test favorites',
  fileCover: 'test file cover',
  fileName: 'test file name',
};

describe('book controller unit', () => {
  it('indexBook', () => {
    indexBook(req, res);
    expect(res.json).toBeCalledWith(books);
  });
  it('getBookById found', () => {
    req.params.id = bookKeys[0];
    getBookById(req, res);
    expect(res.json).toBeCalledWith(books[bookKeys[0]]);
  });
  it('getBookById not found', () => {
    req.params.id = 'qwerty';
    getBookById(req, res);
    expect(res.status).toBeCalledWith(404);
    expect(res.json).toBeCalledWith(status404);
  });
  it('createBook', () => {
    req.body = newBook;
    createBook(req, res);
    expect(res.status).toBeCalledWith(201);
  });
  it('updateBook found', () => {
    req.params.id = bookKeys[1];
    req.body = newBook;
    updateBook(req, res)
    expect(res.json).toBeCalled();
  });
  it('updateBook not found', () => {
    req.params.id = 'qwerty';
    req.body = newBook;
    updateBook(req, res)
    expect(res.status).toBeCalledWith(404);
    expect(res.json).toBeCalledWith(status404);
  });
  it('deleteBook', () => {
    req.params.id = bookKeys[0];
    deleteBook(req, res)
    expect(res.send).toBeCalledWith('ok');
  })
});
