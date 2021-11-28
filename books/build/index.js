"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const connector_1 = require("./mongo/connector");
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = require("passport-local");
const http_1 = require("http");
const socket_io_1 = __importDefault(require("socket.io"));
const routes_1 = require("./routes");
const modules_1 = require("./modules");
const auth_container_1 = require("./modules/auth/auth.container");
const user_service_1 = require("./modules/auth/service/user.service");
const path = __importStar(require("path"));
const { CommentSocket } = require('./modules/comment/comment.socket');
const userService = auth_container_1.authContainer.get(user_service_1.UserService);
const app = (0, express_1.default)();
const server = new http_1.Server(app);
const io = new socket_io_1.default.Server(server, { allowEIO3: true });
const port = process.env.PORT || 3000;
app.set('views', path.join(__dirname, '../', 'src', 'views'));
app.set('view engine', 'ejs');
const verify = async (req, username, password, done) => {
    try {
        const user = await userService.findByUsername(username);
        if (!user) {
            return done(null, new Error('User ' + username + ' does not exist'));
        }
        const checkPassword = await userService.verifyPassword(user, password);
        console.log('checkPassword', checkPassword);
        if (!checkPassword) {
            console.log('not done');
            return done(null, false);
        }
        // `user` будет сохранен в `req.user`
        return done(null, user);
    }
    catch (e) {
        console.log(e);
        return done(null, false);
    }
};
const options = {
    usernameField: 'login',
    passwordField: 'password',
    passReqToCallback: true
};
passport_1.default.use(new passport_local_1.Strategy(options, verify));
passport_1.default.serializeUser(function (user, cb) {
    console.log('curUser serialize', user);
    cb(null, user.id);
});
passport_1.default.deserializeUser(async function (id, cb) {
    const user = await userService.findById(id);
    console.log('curUser deserialize', id, user);
    console.log('test');
    if (!user) {
        return cb(new Error('User ' + id + ' does not exist'));
    }
    cb(null, user);
});
app.use(require('express-session')({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use(express_1.default.json());
app.use('/public', express_1.default.static('public'));
app.use((0, cors_1.default)());
/**
 * подключение базовых роутов
 */
Object.keys(routes_1.routes).forEach((routeName) => {
    console.log(`${routes_1.routes[routeName].path} ${routes_1.routes[routeName].method}: ${routeName} init`);
    switch (routes_1.routes[routeName].method) {
        default:
            app.get(routes_1.routes[routeName].path, routes_1.routes[routeName].function);
            break;
    }
});
/**
 * Подключение модулей
 */
(async () => {
    const moduleRouters = await (0, modules_1.getRoutes)();
    if (moduleRouters) {
        moduleRouters.forEach((route) => {
            if (route) {
                console.log(`${route.path} module init`);
                app.use(route.path, route.router);
            }
        });
    }
})();
const commentSocket = new CommentSocket();
io.on('connection', async (socket) => {
    await commentSocket.commentSocket(socket);
});
(async () => {
    const mongoose = await (0, connector_1.dbConnect)();
    if (mongoose) {
        server.listen(port, () => {
            console.log(`App listening on port: ${port}`);
        });
    }
})();
