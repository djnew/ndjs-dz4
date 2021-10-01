/**
 * Tests book get all route
 *
 * @group e2e/book/get/all
 */

const axios = require('axios');
const {router} = require('../../router/book.router');
const books = require('../../store/book.store');
const {path} = require('../../book.module')

const keys = Object.keys(books);

test('book index e2e', async () => {
  const {data} = await axios.get(`http://localhost:3000${path}${router.bookIndex.path}`);
  expect(data[keys[0]]).not.toBeUndefined()
})
