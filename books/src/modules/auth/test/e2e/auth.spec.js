/**
 * Tests auth route
 *
 * @group e2e/auth
 */

const axios = require('axios');
const {router} = require('../../router/auth.router');
const {path} = require('../../auth.module')

const authTest = {id: 1, mail: 'test@mail.ru'};


test('auth e2e', async () => {
  const {data} = await axios.post(`http://localhost:3000${path}${router.auth.path}`);
  expect(data).toEqual(authTest);
});


