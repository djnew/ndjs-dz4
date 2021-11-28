"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const auth_view_controller_1 = require("../controller/auth-view.controller");
const authViewController = new auth_view_controller_1.AuthViewController();
const router = {
    auth: {
        path: '/login',
        method: 'get',
        auth: function (req, res, next) {
            if (req.user) {
                return res.redirect('/user/me');
            }
            next();
        },
        function: authViewController.authView
    },
    logout: {
        path: '/logout',
        method: 'get',
        function: authViewController.logout
    },
    signup: {
        path: '/me',
        method: 'get',
        auth: function (req, res, next) {
            if (!req.isAuthenticated || !req.isAuthenticated()) {
                if (req.session) {
                    req.session.returnTo = req.originalUrl || req.url;
                }
                return res.redirect('/user/login');
            }
            next();
        },
        function: authViewController.signupView
    }
};
exports.router = router;
