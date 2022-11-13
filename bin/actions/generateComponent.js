"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
var component_1 = __importDefault(require("../templates/component"));
var lazy_1 = __importDefault(require("../templates/lazy"));
var stylesheet_1 = __importDefault(require("../templates/stylesheet"));
var capitalize_1 = __importDefault(require("../utils/capitalize"));
var createFile_1 = __importDefault(require("../utils/createFile"));
var generateComponent = function (name, options) {
    var module = options.module, lazy = options.lazy, story = options.story, opts = __rest(options, ["module", "lazy", "story"]);
    var _a = __read(name.toLowerCase().split('component'), 1), _name = _a[0];
    var moduleName = (0, capitalize_1.default)(_name);
    var pathname = (0, path_1.resolve)(process.cwd(), 'src', 'modules', module, moduleName);
    var filename = moduleName + 'Component';
    (0, fs_1.mkdir)(pathname, { recursive: true }, function (err) {
        if (err)
            return console.log(err);
        (0, createFile_1.default)((0, component_1.default)(filename, opts), {
            type: 'component',
            pathname: pathname,
            name: moduleName,
        });
        if (lazy) {
            (0, createFile_1.default)((0, lazy_1.default)(filename, {
                componentPath: "./".concat(moduleName, ".component.tsx"),
                isUsingArrowFunctions: opts.isUsingArrowFunctions,
                isUsingNamedExports: opts.isUsingNamedExports,
            }), {
                type: 'lazy',
                pathname: pathname,
                name: moduleName,
            });
        }
        if (opts.cssPreprocessor !== 'none') {
            (0, createFile_1.default)((0, stylesheet_1.default)(filename), {
                type: 'style',
                pathname: pathname,
                name: moduleName,
                stylesheet: opts.cssPreprocessor,
            });
        }
        if (opts.testingLib !== 'none') {
            (0, createFile_1.default)((0, component_1.default)(filename, opts), {
                type: 'test',
                pathname: pathname,
                name: moduleName,
            });
        }
    });
    if (story)
        console.log('Has story');
};
exports.default = generateComponent;
