/**
 * Tests auth service
 *
 * @group unit/service/auth
 */


const {AuthService} = require('../../../src/service/auth.service');

const authTest = {id: 1, mail: 'test@mail.ru'};

test('auth service unit', async () => {
  expect(AuthService.authUser()).toEqual(authTest);
});


