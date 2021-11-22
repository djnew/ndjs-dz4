const { home } = require('./controller/home.controller')

const routes = {
  home: {
    path: '/',
    method: 'get',
    function: home
  }
}

module.exports = routes
