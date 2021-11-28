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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoutes = void 0;
const glob_1 = require("glob");
const util = __importStar(require("util"));
const globPromise = util.promisify(glob_1.glob);
function moduleRouters(matches) {
    const moduleRouters = [];
    for (const path of matches) {
        console.log(path);
        moduleRouters.push(require(path.replace('build/', './')));
    }
    return moduleRouters;
}
async function getRoutes() {
    try {
        const files = await globPromise('**/*.module.js');
        return moduleRouters(files);
    }
    catch (e) {
        console.error(e);
        return false;
    }
}
exports.getRoutes = getRoutes;
