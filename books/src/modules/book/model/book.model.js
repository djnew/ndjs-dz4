"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookModel = void 0;
const mongoose_1 = require("mongoose");
const bookScheme = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    authors: {
        type: String,
        required: true
    },
    favorite: String,
    fileCover: String,
    fileName: String,
    fileBook: String
});
const BookModel = (0, mongoose_1.model)('Book', bookScheme);
exports.BookModel = BookModel;
