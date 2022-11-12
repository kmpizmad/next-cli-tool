"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addSubcommand(baseCommand, name, options) {
    var _command = baseCommand.command(name);
    if (!options)
        return _command;
    for (var _i = 0, _a = Object.entries(options); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        console.log(key, value);
    }
    return _command;
}
exports.default = addSubcommand;
