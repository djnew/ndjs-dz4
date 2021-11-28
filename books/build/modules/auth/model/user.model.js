"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const userScheme = new mongoose_1.Schema({
    login: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: String
});
const UserModel = (0, mongoose_1.model)('User', userScheme);
exports.UserModel = UserModel;
