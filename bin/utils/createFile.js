"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
var createFilename = function (_a) {
    var type = _a.type, name = _a.name, pathname = _a.pathname, stylesheet = _a.stylesheet;
    switch (type) {
        case 'component':
            return { path: (0, path_1.resolve)(pathname, "".concat(name, ".component.tsx")), filename: "".concat(name, ".component.tsx") };
        case 'style':
            return { path: (0, path_1.resolve)(pathname, "".concat(name, ".module.").concat(stylesheet)), filename: "".concat(name, ".module.").concat(stylesheet) };
        case 'lazy':
            return { path: (0, path_1.resolve)(pathname, "".concat(name, ".lazy.tsx")), filename: "".concat(name, ".lazy.tsx") };
        case 'test':
            return { path: (0, path_1.resolve)(pathname, "".concat(name, ".test.tsx")), filename: "".concat(name, ".test.tsx") };
        default:
            return { path: '', filename: '' };
    }
};
var createFile = function (data, fileConfig) {
    var _a = createFilename(fileConfig), path = _a.path, filename = _a.filename;
    (0, fs_1.writeFile)(path, data, { encoding: 'utf-8', flag: 'wx' }, function (err) {
        if (err)
            console.log(err);
        else
            console.log('Successfully created', filename);
    });
};
exports.default = createFile;
