"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var capitalize_1 = __importDefault(require("../utils/capitalize"));
var generateHoc = function (name) {
    var filename = 'with' + (0, capitalize_1.default)(name);
    console.log(filename);
};
exports.default = generateHoc;
