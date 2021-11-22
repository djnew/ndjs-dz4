const { UserService } = require('../service/user.service')

function auth (req, res) {
  const { email, login } = req.user
  res.status(201)
  res.json({ email, login })
}

async function signup (req, res) {
  const user = await UserService.create(req.body)
  if (user.status) {
    res.status(201)
    res.json(user)
  } else {
    res.status(400)
    res.json(user)
  }
}

module.exports = { auth, signup }
