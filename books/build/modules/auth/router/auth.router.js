"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const auth_controller_1 = require("../controller/auth.controller");
const passport_1 = __importDefault(require("passport"));
const auth = passport_1.default.authenticate('local', {});
const authController = new auth_controller_1.AuthController();
const router = {
    auth: {
        path: '/login',
        method: 'post',
        auth: auth,
        function: authController.auth
    },
    signup: {
        path: '/signup',
        method: 'post',
        function: authController.signup
    }
};
exports.router = router;
