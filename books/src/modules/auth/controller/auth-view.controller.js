function authView (req, res) {
  res.render('auth/login', {
    title: 'Библиотека - вход/регистрация'
  })
}
function signupView (req, res) {
  res.render('auth/me', {
    title: 'Библиотека - пользователь',
    user: req.user
  })
}
function logout (req, res) {
  req.logout()
  res.redirect('/user/login')
}

module.exports = { authView, signupView, logout }
