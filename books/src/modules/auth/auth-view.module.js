const express = require('express');
const router = express.Router();
const PATH = '/user';
const {router: authRouter} = require('./router/auth-view.router');

Object.keys(authRouter).forEach((route) => {
  if('auth' in authRouter[route]){
    router[authRouter[route].method](authRouter[route].path,authRouter[route].auth, authRouter[route].function);
  }else{
    router[authRouter[route].method](authRouter[route].path, authRouter[route].function);
  }

})

module.exports = {
  router: router,
  path: PATH,
};
