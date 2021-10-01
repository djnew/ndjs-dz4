/**
 * Tests book update route
 *
 * @group e2e/book/get/all
 */

const axios = require('axios');
const {router} = require('../../router/book.router');
const books = require('../../store/book.store');
const keys = Object.keys(books);
const {path} = require('../../book.module');

const updateBook = {
  title: 'update book title',
  description: 'update book description',
  authors: 'update authors',
  favorite: 'update favorites',
  fileCover: 'update file cover',
  fileName: 'update file name',
  fileBook: ''
};

describe('book update e2e', () => {
  it('update by last id', async () => {

    const {
      data,
      status,
    } = await axios.put(`http://localhost:3000${path}${router.bookUpdate.path.replace(':id', keys[keys.length - 1])}`, updateBook);
    expect(status).toBe(200);
    expect(data).toMatchObject(updateBook);
  });
  it('404', async () => {
    try {
      await axios.put(`http://localhost:3000${path}${router.bookUpdate.path.replace(':id', 'qwerty')}`, updateBook);
    } catch (e) {
      expect(e.response.status).toBe(404);
    }
  });
});


