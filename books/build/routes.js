"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const { home } = require('./controller/home.controller');
const routes = {
    home: {
        path: '/',
        method: 'get',
        function: home
    }
};
exports.routes = routes;
