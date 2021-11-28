"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.path = exports.router = void 0;
const book_library_router_1 = require("./router/book-library.router");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.router = router;
const path = '/library';
exports.path = path;
Object.keys(book_library_router_1.router).forEach((route) => {
    switch (book_library_router_1.router[route].method) {
        case 'get':
            console.log(book_library_router_1.router[route].path, book_library_router_1.router[route].function);
            router.get(book_library_router_1.router[route].path, book_library_router_1.router[route].function);
            break;
        case 'delete':
            console.log(book_library_router_1.router[route].path, book_library_router_1.router[route].function);
            router.delete(book_library_router_1.router[route].path, book_library_router_1.router[route].function);
            break;
        case 'post':
            if ('file' in book_library_router_1.router[route]) {
                router.post(book_library_router_1.router[route].path, book_library_router_1.router[route].file, book_library_router_1.router[route].function);
            }
            else {
                router.post(book_library_router_1.router[route].path, book_library_router_1.router[route].function);
            }
            break;
        case 'put':
            console.log(book_library_router_1.router[route].path, book_library_router_1.router[route].function);
            router.put(book_library_router_1.router[route].path, book_library_router_1.router[route].file, book_library_router_1.router[route].function);
            break;
    }
});
