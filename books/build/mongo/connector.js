"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const User = process.env.MONGO_CONNECT_USERNAME || 'root';
const Password = process.env.MONGO_CONNECT_PASSWORD || 'example';
const DbName = process.env.MONGO_CONNECT_DB || 'todos';
const Host = process.env.MONGO_CONNECT_URL || 'mongodb://localhost:27017/';
async function dbConnect() {
    try {
        await mongoose_1.default.connect(Host, {
            user: User,
            pass: Password,
            dbName: DbName
        }, () => {
            console.log('mongo connected');
        });
        return true;
    }
    catch (e) {
        console.error(e);
        return false;
    }
}
exports.dbConnect = dbConnect;
