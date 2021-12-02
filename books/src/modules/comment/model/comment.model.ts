import { Schema, model, SchemaTypes } from 'mongoose'

interface ICommentModel {
  book: String,
  createdAt: Date,
  author: string,
  comment: string
}

const commentScheme = new Schema<ICommentModel>({
  book: {
    type: SchemaTypes.ObjectId,
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: new Date()
  },
  author: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  }
})

const CommentModel = model<ICommentModel>('Comment', commentScheme)

export { CommentModel, ICommentModel }
