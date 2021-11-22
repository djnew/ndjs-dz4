import { Schema, model } from 'mongoose'
import { IBookModel } from '../model/i-book.model'

const bookScheme = new Schema<IBookModel>({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  authors: {
    type: String,
    required: true
  },
  favorite: String,
  fileCover: String,
  fileName: String,
  fileBook: String
})

const BookModel = model<IBookModel>('Book', bookScheme)

export { BookModel }
