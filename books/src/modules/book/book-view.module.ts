import { router as bookViewRouter } from './router/book-library.router'
import express from 'express'
const router = express.Router()

const path = '/library'

Object.keys(bookViewRouter).forEach((route: string) => {
  switch (bookViewRouter[route].method) {
    case 'get':
      console.log(bookViewRouter[route].path, bookViewRouter[route].function)
      router.get(bookViewRouter[route].path, bookViewRouter[route].function)
      break
    case 'delete':
      console.log(bookViewRouter[route].path, bookViewRouter[route].function)
      router.delete(bookViewRouter[route].path, bookViewRouter[route].function)
      break
    case 'post':
      if ('file' in bookViewRouter[route]) {
        router.post(bookViewRouter[route].path, bookViewRouter[route].file, bookViewRouter[route].function)
      } else {
        router.post(bookViewRouter[route].path, bookViewRouter[route].function)
      }
      break
    case 'put':
      console.log(bookViewRouter[route].path, bookViewRouter[route].function)
      router.put(bookViewRouter[route].path, bookViewRouter[route].file, bookViewRouter[route].function)
      break
  }
})

export {
  router,
  path
}
