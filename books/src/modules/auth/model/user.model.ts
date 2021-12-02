import { Schema, model } from 'mongoose'

interface IUserModel{
  id?: string,
  login: string,
  password: string,
  email?: string
}

const userScheme = new Schema<IUserModel>({
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

const UserModel = model<IUserModel>('User', userScheme)

export { UserModel, IUserModel }
