"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.path = exports.router = void 0;
const express_1 = __importDefault(require("express"));
const auth_router_1 = require("./router/auth.router");
const router = express_1.default.Router();
exports.router = router;
const path = '/api/user';
exports.path = path;
Object.keys(auth_router_1.router).forEach((route) => {
    switch (auth_router_1.router[route].method) {
        case 'get':
            if ('auth' in auth_router_1.router[route]) {
                router.get(auth_router_1.router[route].path, auth_router_1.router[route].auth, auth_router_1.router[route].function);
            }
            else {
                router.get(auth_router_1.router[route].path, auth_router_1.router[route].function);
            }
            break;
        case 'post':
            if ('auth' in auth_router_1.router[route]) {
                router.post(auth_router_1.router[route].path, auth_router_1.router[route].auth, auth_router_1.router[route].function);
            }
            else {
                router.post(auth_router_1.router[route].path, auth_router_1.router[route].function);
            }
            break;
    }
});
