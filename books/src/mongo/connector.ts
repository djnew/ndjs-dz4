import mongoose from 'mongoose'

const User = process.env.MONGO_CONNECT_USERNAME || 'root'
const Password = process.env.MONGO_CONNECT_PASSWORD || 'example'
const DbName = process.env.MONGO_CONNECT_DB || 'todos'
const Host = process.env.MONGO_CONNECT_URL || 'mongodb://localhost:27017/'

async function dbConnect (): Promise<boolean> {
  try {
    await mongoose.connect(Host, {
      user: User,
      pass: Password,
      dbName: DbName
    }, () => {
      console.log('mongo connected')
    })

    return true
  } catch (e) {
    console.error(e)
    return false
  }
}

export { dbConnect }
