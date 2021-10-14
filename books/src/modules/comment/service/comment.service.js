const {CommentModel} = require('../model/comment.model');

class CommentService{
  static async addComment(params){
    try {
      const {book, author, comment} = params;
      const saveComment = new CommentModel({book, author, comment});
      return await saveComment.save()
    }catch (e){
      console.error(e);
      return false;
    }
  }
  static async findByBook(id){
    return CommentModel.find({book: id}).sort([['createdAt', 1]]);
  }
}

module.exports = {CommentService}
