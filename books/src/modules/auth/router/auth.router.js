const {auth} = require('../controller/auth.controller');

const router = {
  auth: {
    path: '/login',
    method: 'post',
    function: auth,
  },
}

module.exports = {router}
