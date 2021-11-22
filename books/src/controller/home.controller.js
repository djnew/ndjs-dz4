function home (req, res) {
  res.render('index', {
    title: 'Библиотека'
  })
}

module.exports = { home }
