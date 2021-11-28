"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentContainer = void 0;
require("reflect-metadata");
const inversify_1 = require("inversify");
const comment_service_1 = require("./service/comment.service");
const commentContainer = new inversify_1.Container();
exports.commentContainer = commentContainer;
commentContainer.bind(comment_service_1.CommentService).toSelf();
