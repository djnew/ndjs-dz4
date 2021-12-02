"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const auth_container_1 = require("../auth.container");
const user_service_js_1 = require("../service/user.service.js");
const userService = auth_container_1.authContainer.get(user_service_js_1.UserService);
class AuthController {
    auth(req, res) {
        if (req.user) {
            const { email, login } = req.user;
            res.status(201);
            res.json({ email, login });
        }
        else {
            res.status(400);
            res.json({ message: 'Что то пошло не так' });
        }
    }
    async signup(req, res) {
        const user = await userService.create(req.body);
        if (user.status) {
            res.status(201);
            res.json(user);
        }
        else {
            res.status(400);
            res.json(user);
        }
    }
}
exports.AuthController = AuthController;
