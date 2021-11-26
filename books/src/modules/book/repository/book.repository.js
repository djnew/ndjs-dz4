"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRepository = void 0;
const book_model_1 = require("../model/book.model");
require("reflect-metadata");
const inversify_1 = require("inversify");
let BookRepository = class BookRepository {
    async createBook(book) {
        const newBook = new book_model_1.BookModel(book);
        try {
            await newBook.save();
            return newBook;
        }
        catch (e) {
            console.error(e);
            return false;
        }
    }
    async deleteBook(id) {
        try {
            await book_model_1.BookModel.deleteOne({ _id: id });
            return 'ok';
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }
    async getBook(id) {
        try {
            return book_model_1.BookModel.findById(id);
        }
        catch (e) {
            console.error(e);
            return false;
        }
    }
    async getBooks() {
        return book_model_1.BookModel.find().select('-__v');
    }
    async updateBook(id, params) {
        try {
            return book_model_1.BookModel.findByIdAndUpdate(id, params);
        }
        catch (e) {
            return false;
        }
    }
};
BookRepository = __decorate([
    (0, inversify_1.injectable)()
], BookRepository);
exports.BookRepository = BookRepository;
