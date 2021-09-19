/**
 * Tests book create route
 *
 * @group e2e/book/create
 */

const axios = require('axios');
const {router} = require('../../router/book.router');
const {path} = require('../../book.module')

const newBook = {
  title: "test book2",
  description: "test book2 description",
  authors: "test authors",
  favorite: "test favorites",
  fileCover: "test file cover",
  fileName: "test file name",
  fileBook: ""
}

test('book create e2e', async () => {
  const {data,status} = await axios.post(`http://localhost:3000${path}${router.bookCreate.path}`,newBook);
  expect(status).toBe(201);
  expect(data).toMatchObject(newBook);
})


