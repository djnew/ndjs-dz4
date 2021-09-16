/**
 * Tests book get all route
 *
 * @group e2e/book/get/all
 */

const axios = require('axios');
const router = require('../../../src/routes');
const books = require('../../../src/store/book.store');
const keys = Object.keys(books);

test('book index e2e', async () => {
  const {data} = await axios.get(`http://localhost:3000${router.bookIndex.path}`);
  expect(data[keys[0]]).not.toBeUndefined()
})
