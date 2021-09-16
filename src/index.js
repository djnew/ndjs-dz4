const express = require('express');
const routes = require('./routes');

const app = express()
const port = 3000

app.use(express.json())

Object.keys(routes).forEach((routeName) => {
  console.log(`${routes[routeName].path} ${routes[routeName].method}: ${routeName} init`);
  app[routes[routeName].method](routes[routeName].path, routes[routeName].function);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

