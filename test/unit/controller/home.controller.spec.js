/**
 * Tests home controller
 *
 * @group unit/controller/home
 */

const {home} = require('../../../src/controller/home.controller');

const res = {
  send: jest.fn(),
};
const req = jest.fn();
test('home controller unit', () => {
  home(req, res);
  expect(res.send).toBeCalled();
  expect(res.send).toBeCalledWith('Hello World!');
});
