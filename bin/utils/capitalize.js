"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var capitalize = function (str) {
    return !!str ? str[0].toUpperCase() + str.substring(1) : str;
};
exports.default = capitalize;
