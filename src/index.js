const express = require('express');
const bodyParser = require('body-parser')

const routes = require('./routes');

const app = express()
const port = 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

Object.keys(routes).forEach((routeName) => {
  console.log(`${routes[routeName].path} ${routes[routeName].method}: ${routeName} init`);
  app[routes[routeName].method](routes[routeName].path, routes[routeName].function);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

