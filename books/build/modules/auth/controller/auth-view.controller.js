"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthViewController = void 0;
class AuthViewController {
    authView(req, res) {
        res.render('auth/login', {
            title: 'Библиотека - вход/регистрация'
        });
    }
    signupView(req, res) {
        res.render('auth/me', {
            title: 'Библиотека - пользователь',
            user: req.user
        });
    }
    logout(req, res) {
        req.logout();
        res.redirect('/user/login');
    }
}
exports.AuthViewController = AuthViewController;
