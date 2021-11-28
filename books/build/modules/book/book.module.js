"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.path = exports.router = void 0;
const express_1 = __importDefault(require("express"));
const book_router_1 = require("./router/book.router");
const router = express_1.default.Router();
exports.router = router;
const path = '/api/books';
exports.path = path;
Object.keys(book_router_1.router).forEach((route) => {
    switch (book_router_1.router[route].method) {
        case 'get':
            router.get(book_router_1.router[route].path, book_router_1.router[route].function);
            break;
        case 'delete':
            router.delete(book_router_1.router[route].path, book_router_1.router[route].function);
            break;
        case 'post':
            if ('file' in book_router_1.router[route]) {
                router.post(book_router_1.router[route].path, book_router_1.router[route].file, book_router_1.router[route].function);
            }
            else {
                router.post(book_router_1.router[route].path, book_router_1.router[route].function);
            }
            break;
        case 'put':
            router.put(book_router_1.router[route].path, book_router_1.router[route].file, book_router_1.router[route].function);
            break;
    }
});
