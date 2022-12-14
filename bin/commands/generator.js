"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateHoc = exports.generateHook = exports.generatePage = exports.generateComponent = void 0;
var actions_1 = __importDefault(require("../actions"));
var generateComponent = function (baseCommand) {
    baseCommand
        .command('component <name>')
        .alias('c')
        .option('-m, --module <name>', 'Generate component under a module', 'common')
        .option('-l, --lazy', 'Generates lazy file for component')
        .option('--no-style', 'Skips stylesheet')
        .option('--no-test', 'Skips test file')
        .option('--no-story', 'Skips story file')
        .action(actions_1.default.component)
        .description('Generates a component');
};
exports.generateComponent = generateComponent;
var generatePage = function (baseCommand) {
    baseCommand
        .command('page <name>')
        .alias('p')
        .option('--no-story', 'Skips story file')
        .action(actions_1.default.page)
        .description('Generates a page');
};
exports.generatePage = generatePage;
var generateHook = function (baseCommand) {
    baseCommand
        .command('hook <name>')
        .alias('h')
        .option('-m, --module <name>', 'Generate hook under a module')
        .action(actions_1.default.hook)
        .description('Generates a hook');
};
exports.generateHook = generateHook;
var generateHoc = function (baseCommand) {
    baseCommand.command('hoc <name>').action(actions_1.default.hoc).description('Generates a higher-order component');
};
exports.generateHoc = generateHoc;
