"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.home = void 0;
function home(req, res) {
    res.render('index', {
        title: 'Библиотека'
    });
}
exports.home = home;
