/**
 * Tests home controller
 *
 * @group unit/controller/auth
 */
const {auth} = require('../../controller/auth.controller')

const res = {
  json: jest.fn(),
  status: jest.fn()
};
const req = jest.fn();
const authTest = {id: 1, mail: 'test@mail.ru'};

test('auth controller unit', () => {
  auth(req, res);
  expect(res.json).toBeCalled();
  expect(res.status).toBeCalled();
  expect(res.status).toBeCalledWith(201)
  expect(res.json).toBeCalledWith(authTest)
})
