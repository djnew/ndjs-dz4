const {authView, signupView,logout} = require('../controller/auth-view.controller');
const passport = require('passport');

const router = {
  auth: {
    path: '/login',
    method: 'get',
    auth: function (req, res, next) {
      if (req.user) {
        return res.redirect('/user/me')
      }
      next()
    },
    function: authView,
  },
  logout:{
    path: '/logout',
    method: 'get',
    function: logout
  },
  signup: {
    path: '/me',
    method: 'get',
    auth: function (req, res, next) {
      if (!req.isAuthenticated || !req.isAuthenticated()) {
        if (req.session) {
          req.session.returnTo = req.originalUrl || req.url
        }
        return res.redirect('/user/login')
      }
      next()
    },
    function: signupView,
  },
}

module.exports = {router}
