const { auth, signup } = require('../controller/auth.controller')
const passport = require('passport')

const router = {
  auth: {
    path: '/login',
    method: 'post',
    auth: passport.authenticate(
      'local',
      {
        failureRedirect: false
      }
    ),
    function: auth
  },
  signup: {
    path: '/signup',
    method: 'post',
    function: signup
  }
}

module.exports = { router }
