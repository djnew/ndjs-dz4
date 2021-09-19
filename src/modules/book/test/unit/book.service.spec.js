/**
 * Tests book service
 *
 * @group unit/service/book
 */

const {BookService} = require('../../service/book.service');
const books = require('../../store/book.store');
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
  it('createBook', async () => {
    const book = await BookService.createBook({body: newBook})
    expect(book).toMatchObject(newBook);
  });
  it('updateBook found', async () => {
    const updateBook = await BookService.updateBook(bookKeys[1],newBook);
    expect(updateBook).toMatchObject(newBook);
  })
  it('updateBook not found', async () => {
    const testFalse = await BookService.updateBook('qwerty')
    expect(testFalse).toBeFalsy();
  })
  it('deleteBook', () => {
    expect(BookService.deleteBook(bookKeys[bookKeys.length - 1])).toBe('ok');
  })
});
