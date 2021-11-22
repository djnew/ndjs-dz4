const { UserModel } = require('../model/user.model')
const bcrypt = require('bcrypt')

class UserService {
  static async create (params) {
    const { email, password, login } = params

    const passwordHash = await bcrypt.hash(password, 10)
    const newUser = new UserModel({
      email,
      password: passwordHash,
      login
    })
    try {
      await newUser.save()
    } catch (error) {
      if (error.code === 11000) {
        return { status: false, message: `Пользователь с таким логином: ${login} уже зарегистрирован` }
      }
      console.log(error)
      return { status: false, message: 'Чтото пошло не так' }
    }

    newUser.passwordHash = undefined
    return { data: newUser, status: true }
  }

  static async findById (id) {
    try {
      return UserModel.findOne({ _id: id })
    } catch (e) {
      console.error(e)
      return false
    }
  }

  static async findByUsername (login) {
    try {
      return UserModel.findOne({ login: login })
    } catch (e) {
      console.error(e)
      return false
    }
  }

  static async verifyPassword (user, password) {
    const result = await bcrypt.compare(password, user.password)
    return result
  }
}

module.exports = { UserService }
