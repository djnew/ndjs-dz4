const express = require('express');
const router = express.Router();

const {router: bookViewRouter} = require('./router/book-library.router');

const PATH = '/library';


Object.keys(bookViewRouter).forEach((route) => {
  if ('file' in bookViewRouter[route]) {
    router[bookViewRouter[route].method](bookViewRouter[route].path, bookViewRouter[route].file, bookViewRouter[route].function);
  } else {
    router[bookViewRouter[route].method](bookViewRouter[route].path, bookViewRouter[route].function);
  }
});

module.exports = {
  router: router,
  path: PATH,
};

