const {CommentService} = require('./service/comment.service');


async function commentSocket(socket){
  const {id} = socket;
  console.log(`Socket connected: ${id}`);

  const {bookId} = socket.handshake.query;
  console.log(`Socket bookId: ${bookId}`);
  socket.join(bookId);

  if(bookId){
    const booksComment = await CommentService.findByBook(bookId);
    booksComment.forEach((comment) => {
      socket.emit('comment-to-book', comment);
    })
  }

  socket.on('comment-to-book', async (msg) => {
    msg.type = `book: ${bookId}`;
    const bookComment = await CommentService.addComment(msg)
    socket.to(bookId).emit('comment-to-book', bookComment);
    socket.emit('comment-to-book', bookComment);
  });

  socket.on('disconnect', () => {
    console.log(`Socket disconnected: ${id}`);
  });
}

module.exports = {commentSocket}
