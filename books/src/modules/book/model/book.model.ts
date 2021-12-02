import { Schema, model } from 'mongoose'

interface IBookModel {
  id?: string,
  title: string,
  description: string,
  authors: string,
  favorite: string,
  fileCover?: string,
  fileName?: string,
  fileBook?: string
}

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

export { BookModel, IBookModel }
