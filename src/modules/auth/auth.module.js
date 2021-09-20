const express = require('express');
const router = express.Router();
const PATH = '/api/user';
const {router: authRouter} = require('./router/auth.router');

Object.keys(authRouter).forEach((route) => {
  router[authRouter[route].method](authRouter[route].path, authRouter[route].function);
})

module.exports = {
  router: router,
  path: PATH,
};
