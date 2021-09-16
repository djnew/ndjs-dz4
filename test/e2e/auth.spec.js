/**
 * Tests auth route
 *
 * @group e2e/auth
 */

const axios = require('axios');
const router = require('../../src/routes');
const authTest = {id: 1, mail: 'test@mail.ru'};


test('auth e2e', async () => {
  const {data} = await axios.post(`http://localhost:3000${router.auth.path}`);
  expect(data).toEqual(authTest);
});

