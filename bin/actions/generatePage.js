"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var capitalize_1 = __importDefault(require("../utils/capitalize"));
var generatePage = function (name) {
    var filename = (0, capitalize_1.default)(name) + 'Page';
    console.log(filename);
};
exports.default = generatePage;
