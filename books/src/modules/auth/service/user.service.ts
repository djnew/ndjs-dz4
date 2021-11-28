import 'reflect-metadata'
import { IUserModel, UserModel } from '../model/user.model'
import bcrypt from 'bcrypt'
import { injectable } from 'inversify'

interface ErrorWithCode extends Error{
  code?: number
}

@injectable()
class UserService {
  async create (params: IUserModel) {
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
      const e = error as ErrorWithCode
      if (e.code === 11000) {
        return { status: false, message: `Пользователь с таким логином: ${login} уже зарегистрирован` }
      }
      console.log(e)
      return { status: false, message: 'Чтото пошло не так' }
    }

    newUser.password = ''
    return { data: newUser, status: true }
  }

  async findById (id: string) {
    try {
      return UserModel.findOne({ _id: id })
    } catch (e) {
      console.error(e)
      return false
    }
  }

  async findByUsername (login: string) {
    try {
      return UserModel.findOne({ login: login })
    } catch (e) {
      console.error(e)
      return false
    }
  }

  async verifyPassword (user: IUserModel, password: string) {
    return await bcrypt.compare(password, user.password)
  }
}

export { UserService }
