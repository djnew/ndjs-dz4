import { commentContainer } from './comment.container.js'
import { CommentService, ICommentDTO } from './service/comment.service'
import { Socket } from 'socket.io'

const commentService = commentContainer.get(CommentService)

class CommentSocket {
  async commentSocket (socket: Socket) {
    const { id } = socket
    console.log(`Socket connected: ${id}`)

    let { bookId } = socket.handshake.query

    if (bookId) {
      console.log(`Socket bookId: ${bookId}`)
      socket.join(bookId)
      if (typeof bookId === 'object') {
        bookId = bookId.join('')
      }
      const booksComment = await commentService.findByBook(bookId)
      if (booksComment) {
        booksComment.forEach((comment) => {
          socket.emit('comment-to-book', comment)
        })
      }
    }

    socket.on('comment-to-book', async (msg: ICommentDTO) => {
      const bookComment = await commentService.addComment(msg)
      if (bookId) {
        socket.to(bookId).emit('comment-to-book', bookComment)
        socket.emit('comment-to-book', bookComment)
      }
    })

    socket.on('disconnect', () => {
      console.log(`Socket disconnected: ${id}`)
    })
  }
}

module.exports = { CommentSocket }
