"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var capitalize = function (str) {
    return !!str ? str : str[0].toUpperCase() + str.substring(1);
};
exports.default = capitalize;
