import express from 'express'
import { router as bookRouter } from './router/book.router'

const router = express.Router()
const path = '/api/books'

Object.keys(bookRouter).forEach((route: string) => {
  switch (bookRouter[route].method) {
    case 'get':
      router.get(bookRouter[route].path, bookRouter[route].function)
      break
    case 'delete':
      router.delete(bookRouter[route].path, bookRouter[route].function)
      break
    case 'post':
      if ('file' in bookRouter[route]) {
        router.post(bookRouter[route].path, bookRouter[route].file, bookRouter[route].function)
      } else {
        router.post(bookRouter[route].path, bookRouter[route].function)
      }
      break
    case 'put':
      router.put(bookRouter[route].path, bookRouter[route].file, bookRouter[route].function)
      break
  }
})

export {
  router,
  path
}
