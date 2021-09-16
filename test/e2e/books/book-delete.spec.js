/**
 * Tests book delete route
 *
 * @group e2e/book/delete
 */

const axios = require('axios');
const router = require('../../../src/routes');
const newBookForDelete = {
  title: 'test book2',
  description: 'test book2 description',
  authors: 'test authors',
  favorite: 'test favorites',
  fileCover: 'test file cover',
  fileName: 'test file name',
};

describe(' book delete e2e', () => {
  it('delete by id', async () => {
    const {data: {id}} = await axios.post(`http://localhost:3000${router.bookCreate.path}`, newBookForDelete);
    const {
      data,
      status,
    } = await axios.delete(`http://localhost:3000${router.bookDelete.path.replace(':id', id)}`);
    expect(status).toBe(200);
    expect(data).toBe('ok');
  });
  it('not found', async () => {
      const {data} = await axios.delete(`http://localhost:3000${router.bookDelete.path.replace(':id', 'qwerty')}`);
      expect(data).toBe('')
  });
});
