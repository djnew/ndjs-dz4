/**
 * Tests book get by id route
 *
 * @group e2e/book/get/byId
 */

const axios = require('axios');
const {router} = require('../../router/book.router');
const books = require('../../store/book.store');
const {path} = require('../../book.module')

const keys = Object.keys(books);

describe('book get by id e2e', () => {
  it('by key in book store', async () => {
    const {data} = await axios.get(`http://localhost:3000${path}${router.bookGetById.path.replace(':id', keys[0])}`);
    expect(data).toEqual(books[keys[0]]);
  });
  it('404', async () => {
    try {
      await axios.get(`http://localhost:3000${path}${router.bookGetById.path.replace(':id', 'qwerty')}`);
    } catch (e) {
      expect(e.response.status).toBe(404);
    }
  });
});
