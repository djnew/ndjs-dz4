import { RouterKeyType } from './modules/book/router/router.types'

const { home } = require('./controller/home.controller')

const routes: RouterKeyType = {
  home: {
    path: '/',
    method: 'get',
    function: home
  }
}

export { routes }
