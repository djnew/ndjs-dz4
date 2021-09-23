/**
 * Tests home controller
 *
 * @group unit/controller/home
 */

const {home} = require('../../../src/controller/home.controller');

const res = {
  render: jest.fn(),
};
const req = jest.fn();
test('home controller unit', () => {
  home(req, res);
  expect(res.render).toBeCalled();
});
