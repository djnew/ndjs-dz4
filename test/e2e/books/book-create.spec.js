/**
 * Tests book create route
 *
 * @group e2e/book/create
 */

const axios = require('axios');
const router = require('../../../src/routes');

const newBook = {
  title: "test book2",
  description: "test book2 description",
  authors: "test authors",
  favorite: "test favorites",
  fileCover: "test file cover",
  fileName: "test file name",
}

test('book create e2e', async () => {
  const {data,status} = await axios.post(`http://localhost:3000${router.bookCreate.path}`,newBook);
  expect(status).toBe(201);
  expect(data).toMatchObject(newBook);
})


