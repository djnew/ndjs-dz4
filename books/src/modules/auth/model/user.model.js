const { Schema, model } = require('mongoose')

const userScheme = new Schema({
  login: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: String
})

const UserModel = model('User', userScheme)

module.exports = { UserModel }
