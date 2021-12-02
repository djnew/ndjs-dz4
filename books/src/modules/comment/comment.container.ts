import 'reflect-metadata'
import { Container } from 'inversify'
import { CommentService } from './service/comment.service'

const commentContainer = new Container()

commentContainer.bind(CommentService).toSelf()

export { commentContainer }
