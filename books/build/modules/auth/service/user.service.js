"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
require("reflect-metadata");
const user_model_1 = require("../model/user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const inversify_1 = require("inversify");
let UserService = class UserService {
    async create(params) {
        const { email, password, login } = params;
        const passwordHash = await bcrypt_1.default.hash(password, 10);
        const newUser = new user_model_1.UserModel({
            email,
            password: passwordHash,
            login
        });
        try {
            await newUser.save();
        }
        catch (error) {
            const e = error;
            if (e.code === 11000) {
                return { status: false, message: `Пользователь с таким логином: ${login} уже зарегистрирован` };
            }
            console.log(e);
            return { status: false, message: 'Чтото пошло не так' };
        }
        newUser.password = '';
        return { data: newUser, status: true };
    }
    async findById(id) {
        try {
            return user_model_1.UserModel.findOne({ _id: id });
        }
        catch (e) {
            console.error(e);
            return false;
        }
    }
    async findByUsername(login) {
        try {
            return user_model_1.UserModel.findOne({ login: login });
        }
        catch (e) {
            console.error(e);
            return false;
        }
    }
    async verifyPassword(user, password) {
        return await bcrypt_1.default.compare(password, user.password);
    }
};
UserService = __decorate([
    (0, inversify_1.injectable)()
], UserService);
exports.UserService = UserService;
