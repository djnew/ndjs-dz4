import express from 'express'
import { router as authRouter } from './router/auth.router'

const router = express.Router()
const path = '/api/user'

Object.keys(authRouter).forEach((route) => {
  switch (authRouter[route].method) {
    case 'get':
      if ('auth' in authRouter[route]) {
        router.get(authRouter[route].path, authRouter[route].auth, authRouter[route].function)
      } else {
        router.get(authRouter[route].path, authRouter[route].function)
      }
      break
    case 'post':
      if ('auth' in authRouter[route]) {
        router.post(authRouter[route].path, authRouter[route].auth, authRouter[route].function)
      } else {
        router.post(authRouter[route].path, authRouter[route].function)
      }
      break
  }
})

export {
  router,
  path
}
