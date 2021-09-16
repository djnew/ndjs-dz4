/**
 * Tests book service
 *
 * @group unit/service/book
 */

const {BookService} = require('../../../src/service/book.service');
const books = require('../../../src/store/book.store');
const bookKeys = Object.keys(books);
const newBook = {
  title: "test create/update",
  description: "test description",
  authors: "test authors",
  favorite: "test favorites",
  fileCover: "test file cover",
  fileName: "test file name",
}
describe('book service unit', () => {
  it('getAll', () => {
    expect(BookService.getAll()).toMatchObject(books);
  });
  it('getById found', () => {
    expect(BookService.getById(bookKeys[0])).toMatchObject(books[bookKeys[0]]);
  });
  it('getById not found', () => {
    expect(BookService.getById('qwerty')).toBeFalsy();
  });
  it('createBook', () => {
    expect(BookService.createBook(newBook)).toMatchObject(newBook);
  });
  it('updateBook found', () => {
    expect(BookService.updateBook(bookKeys[1],newBook)).toMatchObject(newBook);
  })
  it('updateBook not found', () => {
    expect(BookService.updateBook('qwerty')).toBeFalsy();
  })
  it('deleteBook', () => {
    expect(BookService.deleteBook(bookKeys[bookKeys.length - 1])).toBe('ok');
  })
});
