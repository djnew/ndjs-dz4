const express = require('express');
const cors = require('cors');
const {dbConnect} = require('./mongo/connector')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const http = require('http');
const socketIO = require('socket.io');

const routes = require('./routes');
const {getRoutes} = require('./modules');
const {UserService} = require('./modules/auth/service/user.service');
const {commentSocket} = require('./modules/comment/comment.socket');

const app = express();
const server = http.Server(app);
const io = socketIO(server);

const port = process.env.PORT || 3000;
app.set('views', './src/views');
app.set("view engine", "ejs");

async function verify (username, password, done) {
  const user = await UserService.findByUsername(username)
  console.log(user);
  if (!user) { return done(null, new Error('User ' + id + ' does not exist')) }
  const checkPassword = await UserService.verifyPassword(user, password);
  console.log(checkPassword);
  if (!checkPassword) { return done(null, false) }

  // `user` будет сохранен в `req.user`
  return done(null, user)
}

const options = {
  usernameField: 'login',
  passwordField: 'password',
  passReqToCallback: false,
}

passport.use('local', new LocalStrategy(options, verify))

passport.serializeUser(function (user, cb) {
  cb(null, user.id)
})

passport.deserializeUser(async function (id, cb) {
  const user = await UserService.findById(id);
  if (!user) { return cb(new Error('User ' + id + ' does not exist')) }
  cb(null, user)
})

app.use(require('express-session')({
  secret: process.env.COOKIE_SECRET,
  resave: false,
  saveUninitialized: false,
}))

app.use(passport.initialize())
app.use(passport.session())

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
})();

io.on('connection', async (socket) => {
  await commentSocket(socket);
});

(async () => {
  const mongoose = await dbConnect();
  if(mongoose) {
    server.listen(port, () => {
      console.log(`App listening on port: ${port}`);
    });
  }
})();


