"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var createProgram = function (pkg) {
    var name = pkg.name, description = pkg.description, version = pkg.version;
    var program = new commander_1.Command(name);
    program.description(description);
    program.version(version, '-v, --version');
    return program;
};
exports.default = createProgram;
