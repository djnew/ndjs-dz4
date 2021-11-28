"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentService = void 0;
const inversify_1 = require("inversify");
const comment_model_1 = require("../model/comment.model");
let CommentService = class CommentService {
    async addComment(params) {
        try {
            const { book, author, comment } = params;
            const saveComment = new comment_model_1.CommentModel({ book, author, comment });
            return await saveComment.save();
        }
        catch (e) {
            console.error(e);
            return false;
        }
    }
    async findByBook(id) {
        const comments = comment_model_1.CommentModel.find({ book: id }).sort([['createdAt', 1]]).exec();
        if (comments) {
            return comments;
        }
        return false;
    }
};
CommentService = __decorate([
    (0, inversify_1.injectable)()
], CommentService);
exports.CommentService = CommentService;
