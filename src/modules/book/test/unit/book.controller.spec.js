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
  downloadBook,
} = require('../../controller/book.controller');
const books = require('../../store/book.store');
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
    send: jest.fn(),
    download: jest.fn(),
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
  it('createBook', async () => {
    req.body = newBook;
    await createBook(req, res);
    expect(res.status).toBeCalledWith(201);
  });
  it('updateBook found', async () => {
    req.params.id = bookKeys[1];
    req.body = newBook;
    await updateBook(req, res);
    expect(res.json).toBeCalled();
  });
  it('updateBook not found', async () => {
    req.params.id = 'qwerty';
    req.body = newBook;
    await updateBook(req, res);
    expect(res.status).toBeCalledWith(404);
    expect(res.json).toBeCalledWith(status404);
  });
  it('deleteBook found', () => {
    req.params.id = bookKeys[bookKeys.length - 1];
    deleteBook(req, res);
    expect(res.send).toBeCalledWith('ok');
  });
  it('deleteBook not found', () => {
    req.params.id = 'qwerty';
    deleteBook(req, res);
    expect(res.send).toBeCalledWith('');
  });
  it('downloadBook found', () => {
    req.params.id = bookKeys[0];
    downloadBook(req, res);
    expect(res.download).toBeCalled()
  });
  it('downloadBook not found', () => {
    req.params.id = 'qwerty';
    downloadBook(req, res);
    expect(res.status).toBeCalledWith(404);
  });
});
