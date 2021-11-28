import express, { Request } from 'express'
import cors from 'cors'
import { dbConnect } from './mongo/connector'
import passport from 'passport'
import {
  IStrategyOptionsWithRequest,
  Strategy as LocalStrategy,
  VerifyFunctionWithRequest
} from 'passport-local'
import { Server } from 'http'
import ioserver, { Socket } from 'socket.io'

import { routes } from './routes'
import { getRoutes } from './modules'
import { authContainer } from './modules/auth/auth.container'
import { UserService } from './modules/auth/service/user.service'
import * as path from 'path'

const { CommentSocket } = require('./modules/comment/comment.socket')

const userService = authContainer.get<UserService>(UserService)

const app = express()
const server = new Server(app)
const io = new ioserver.Server(server, { allowEIO3: true })

const port = process.env.PORT || 3000
app.set('views', path.join(__dirname, '../', 'src', 'views'))
app.set('view engine', 'ejs')

const verify: VerifyFunctionWithRequest = async (req: Request, username: string, password: string, done: any) => {
  try {
    const user = await userService.findByUsername(username)
    if (!user) {
      return done(null, new Error('User ' + username + ' does not exist'))
    }
    const checkPassword = await userService.verifyPassword(user, password)
    console.log('checkPassword', checkPassword)
    if (!checkPassword) {
      console.log('not done')
      return done(null, false)
    }

    // `user` будет сохранен в `req.user`
    return done(null, user)
  } catch (e) {
    console.log(e)
    return done(null, false)
  }
}

const options: IStrategyOptionsWithRequest = {
  usernameField: 'login',
  passwordField: 'password',
  passReqToCallback: true
}

passport.use(new LocalStrategy(options, verify))

interface IUser{
  id?: number
}

passport.serializeUser(function (user: IUser, cb: any) {
  console.log('curUser serialize', user)
  cb(null, user.id)
})

passport.deserializeUser(async function (id: string, cb) {
  const user = await userService.findById(id)
  console.log('curUser deserialize', id, user)
  console.log('test')
  if (!user) {
    return cb(new Error('User ' + id + ' does not exist'))
  }
  cb(null, user)
})

app.use(require('express-session')({
  secret: process.env.COOKIE_SECRET,
  resave: false,
  saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(express.json())
app.use('/public', express.static('public'))
app.use(cors())

/**
 * подключение базовых роутов
 */
Object.keys(routes).forEach((routeName) => {
  console.log(`${routes[routeName].path} ${routes[routeName].method}: ${routeName} init`)
  switch (routes[routeName].method) {
    default:
      app.get(routes[routeName].path, routes[routeName].function)
      break
  }
});

/**
 * Подключение модулей
 */
(async () => {
  const moduleRouters = await getRoutes()
  if (moduleRouters) {
    moduleRouters.forEach((route) => {
      if (route) {
        console.log(`${route.path} module init`)
        app.use(route.path, route.router)
      }
    })
  }
})()
const commentSocket = new CommentSocket()
io.on('connection', async (socket: Socket) => {
  await commentSocket.commentSocket(socket)
});

(async () => {
  const mongoose = await dbConnect()
  if (mongoose) {
    server.listen(port, () => {
      console.log(`App listening on port: ${port}`)
    })
  }
})()
