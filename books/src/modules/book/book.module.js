const express = require('express');
const router = express.Router();

const {router: bookRouter} = require('./router/book.router');

const PATH = '/api/books';


Object.keys(bookRouter).forEach((route) => {
  if ('file' in bookRouter[route]) {
    router[bookRouter[route].method](bookRouter[route].path, bookRouter[route].file, bookRouter[route].function);
  } else {
    router[bookRouter[route].method](bookRouter[route].path, bookRouter[route].function);
  }
});

module.exports = {
  router: router,
  path: PATH,
};

