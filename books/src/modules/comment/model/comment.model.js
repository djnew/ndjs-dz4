const { Schema, model, SchemaTypes } = require('mongoose')

const commentScheme = new Schema({
  book: {
    type: SchemaTypes.ObjectId,
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
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

const CommentModel = model('Comment', commentScheme)

module.exports = { CommentModel }
