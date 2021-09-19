const {AuthService} = require('../service/auth.service');

function auth(req, res) {
  res.status(201);
  res.json(AuthService.authUser());
}

module.exports = {auth};
