"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
require("reflect-metadata");
const book_repository_1 = require("../repository/book.repository");
const axios_1 = __importDefault(require("axios"));
const inversify_1 = require("inversify");
const url = process.env.COUNTER_URL || 'localhost';
const port = process.env.COUNTER_PORT || 5000;
let BookService = class BookService {
    constructor(bookRepository) {
        this.bookRepository = bookRepository;
    }
    async getAll() {
        return this.bookRepository.getBooks();
    }
    async incrCounter(id) {
        console.log(`incr ${url}:${port}/counter/${id}/incr`);
        try {
            const { data } = await axios_1.default.get(`${url}:${port}/counter/${id}/incr`);
            return data.counter || false;
        }
        catch (e) {
            console.error(e);
            return false;
        }
    }
    async getCounter(id) {
        console.log(`get ${url}:${port}/counter/${id}`);
        try {
            const { data } = await axios_1.default.get(`${url}:${port}/counter/${id}`);
            return data.counter || false;
        }
        catch (e) {
            console.error(e);
            return false;
        }
    }
    async getById(id, incr = false) {
        const book = await this.bookRepository.getBook(id);
        let shows;
        if (book) {
            if (incr) {
                shows = await this.incrCounter(id);
            }
            else {
                shows = await this.getCounter(id);
            }
            return {
                book: book,
                shows: shows || 0
            };
        }
        return false;
    }
    async createBook(params) {
        let bookFile = {
            fileBook: '',
            fileName: ''
        };
        if (params.file !== undefined) {
            bookFile = { fileBook: params.file.path, fileName: params.file.originalname };
        }
        const bookProps = {
            title: params.body.title,
            description: params.body.description,
            authors: params.body.authors,
            favorite: params.body.favorite,
            fileCover: params.body.fileCover
        };
        return await this.bookRepository.createBook({ ...bookProps, ...bookFile });
    }
    async updateBook(id, params) {
        let bookFile = {
            fileBook: '',
            fileName: ''
        };
        if (params.file !== undefined) {
            bookFile = { fileBook: params.file.path, fileName: params.file.originalname };
        }
        const bookProps = {
            title: params.body.title,
            description: params.body.description,
            authors: params.body.authors,
            favorite: params.body.favorite,
            fileCover: params.body.fileCover
        };
        const updateBook = await this.bookRepository.updateBook(id, { ...bookProps, ...bookFile });
        if (updateBook) {
            return updateBook;
        }
        return false;
    }
    async deleteBook(id) {
        return this.bookRepository.deleteBook(id);
    }
};
BookService = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(book_repository_1.BookRepository)),
    __metadata("design:paramtypes", [book_repository_1.BookRepository])
], BookService);
exports.BookService = BookService;
