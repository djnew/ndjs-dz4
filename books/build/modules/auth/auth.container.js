"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authContainer = void 0;
require("reflect-metadata");
const inversify_1 = require("inversify");
const user_service_1 = require("./service/user.service");
const authContainer = new inversify_1.Container();
exports.authContainer = authContainer;
authContainer.bind(user_service_1.UserService).toSelf();
