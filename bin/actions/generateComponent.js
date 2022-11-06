"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var capitalize_1 = __importDefault(require("../utils/capitalize"));
var generateComponent = function (name) {
    var filename = (0, capitalize_1.default)(name) + 'Component';
    console.log(filename);
};
exports.default = generateComponent;
