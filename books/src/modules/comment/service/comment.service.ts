import { injectable } from 'inversify'
import { CommentModel, ICommentModel } from '../model/comment.model'

interface ICommentDTO{
  book:string,
  author: string,
  comment: string
}

@injectable()
class CommentService {
  async addComment (params: ICommentDTO): Promise<ICommentModel | false> {
    try {
      const { book, author, comment } = params
      const saveComment = new CommentModel({ book, author, comment })
      return await saveComment.save()
    } catch (e) {
      console.error(e)
      return false
    }
  }

  async findByBook (id: string): Promise<Array<ICommentModel> | false> {
    const comments = CommentModel.find({ book: id }).sort([['createdAt', 1]]).exec()
    if (comments) {
      return comments
    }

    return false
  }
}

export { CommentService, ICommentDTO }
