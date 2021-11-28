"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
require("reflect-metadata");
const inversify_1 = require("inversify");
const comment_service_1 = require("./service/comment.service");
const container = new inversify_1.Container();
exports.container = container;
container.bind(comment_service_1.CommentService).toSelf();
