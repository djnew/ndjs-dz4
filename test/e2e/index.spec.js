/**
 * Tests home route
 *
 * @group e2e/home
 */

const axios = require('axios');

test('home e2e', async () => {
  const {data} = await axios.get('http://localhost:3000');
  expect(data).toBe('Hello World!')
})
