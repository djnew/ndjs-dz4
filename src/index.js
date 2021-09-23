const express = require('express');
const cors = require('cors');

const routes = require('./routes');
const {getRoutes} = require('./modules');

const app = express();
const port = process.env.PORT || 3000;
app.set('views', './src/views');
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.static('public'));
app.use(cors());

/**
 * подключение базовых роутов
 */
Object.keys(routes).forEach((routeName) => {
  console.log(`${routes[routeName].path} ${routes[routeName].method}: ${routeName} init`);
  if ('upload' in routes[routeName]) {
    app[routes[routeName].method](routes[routeName].path, routes[routeName].upload, routes[routeName].function);
  } else {
    app[routes[routeName].method](routes[routeName].path, routes[routeName].function);
  }
});

/**
 * Подключение модулей
 */
(async() => {
  const moduleRouters = await getRoutes();
  moduleRouters.forEach((route) => {
    console.log(`${route.path} module init`);
    app.use(route.path, route.router);
  });
})()

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});

