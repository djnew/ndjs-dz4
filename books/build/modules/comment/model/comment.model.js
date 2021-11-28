"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentModel = void 0;
const mongoose_1 = require("mongoose");
const commentScheme = new mongoose_1.Schema({
    book: {
        type: mongoose_1.SchemaTypes.ObjectId,
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
});
const CommentModel = (0, mongoose_1.model)('Comment', commentScheme);
exports.CommentModel = CommentModel;
