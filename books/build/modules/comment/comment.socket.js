"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const comment_container_js_1 = require("./comment.container.js");
const comment_service_1 = require("./service/comment.service");
const commentService = comment_container_js_1.commentContainer.get(comment_service_1.CommentService);
class CommentSocket {
    async commentSocket(socket) {
        const { id } = socket;
        console.log(`Socket connected: ${id}`);
        let { bookId } = socket.handshake.query;
        if (bookId) {
            console.log(`Socket bookId: ${bookId}`);
            socket.join(bookId);
            if (typeof bookId === 'object') {
                bookId = bookId.join('');
            }
            const booksComment = await commentService.findByBook(bookId);
            if (booksComment) {
                booksComment.forEach((comment) => {
                    socket.emit('comment-to-book', comment);
                });
            }
        }
        socket.on('comment-to-book', async (msg) => {
            const bookComment = await commentService.addComment(msg);
            if (bookId) {
                socket.to(bookId).emit('comment-to-book', bookComment);
                socket.emit('comment-to-book', bookComment);
            }
        });
        socket.on('disconnect', () => {
            console.log(`Socket disconnected: ${id}`);
        });
    }
}
module.exports = { CommentSocket };
