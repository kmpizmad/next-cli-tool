"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateHoc = exports.generateHook = exports.generatePage = exports.generateComponent = void 0;
var actions_1 = __importDefault(require("../actions"));
var generateComponent = function (_a, baseCommand) {
    var cssPreprocessor = _a.cssPreprocessor, testingLib = _a.testingLib, isUsingInterfaces = _a.isUsingInterfaces, isUsingArrowFunctions = _a.isUsingArrowFunctions, isUsingNamedExports = _a.isUsingNamedExports;
    baseCommand
        .command('component <name>')
        .alias('c')
        .option('-m, --module <name>', 'Generate component under a module', 'common')
        .option('-l, --lazy', 'Generates lazy file for component')
        .option('--no-story', 'Skips story file')
        .action(function (name, options) {
        return actions_1.default.component(name, __assign(__assign({}, options), { cssPreprocessor: cssPreprocessor, testingLib: testingLib, isUsingInterfaces: isUsingInterfaces, isUsingArrowFunctions: isUsingArrowFunctions, isUsingNamedExports: isUsingNamedExports }));
    })
        .description('Generates a component');
};
exports.generateComponent = generateComponent;
var generatePage = function (_config, baseCommand) {
    baseCommand
        .command('page <name>')
        .alias('p')
        .option('--no-story', 'Skips story file')
        .action(actions_1.default.page)
        .description('Generates a page');
};
exports.generatePage = generatePage;
var generateHook = function (_config, baseCommand) {
    baseCommand
        .command('hook <name>')
        .alias('h')
        .option('-m, --module <name>', 'Generate hook under a module')
        .action(actions_1.default.hook)
        .description('Generates a hook');
};
exports.generateHook = generateHook;
var generateHoc = function (_config, baseCommand) {
    baseCommand.command('hoc <name>').action(actions_1.default.hoc).description('Generates a higher-order component');
};
exports.generateHoc = generateHoc;
