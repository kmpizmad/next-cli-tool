"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = __importDefault(require("inquirer"));
var createConfig_1 = __importDefault(require("./createConfig"));
var prompt = function (callback) {
    inquirer_1.default
        .prompt([
        {
            type: 'checkbox',
            message: 'What modules do you want to generate?',
            name: 'modules',
            choices: ['pages', 'components', 'higher-order components', 'hooks'],
            default: ['components'],
        },
        {
            type: 'input',
            message: 'What is the name of your modules folder?',
            name: 'modulesFolderName',
            default: 'modules',
        },
        {
            type: 'confirm',
            message: 'Do you prefer arrow functions?',
            name: 'isUsingArrowFunctions',
            default: false,
        },
        {
            type: 'confirm',
            message: 'Do you prefer interfaces?',
            name: 'isUsingInterfaces',
            default: false,
        },
        {
            type: 'confirm',
            message: 'Do you prefer named exports?',
            name: 'isUsingNamedExports',
            default: false,
        },
        {
            type: 'list',
            message: 'Which CSS preprocessor do you use?',
            name: 'cssPreprocessor',
            choices: ['none', 'css', 'scss', 'sass', 'less'],
        },
        {
            type: 'list',
            message: 'Which testing library do you use?',
            name: 'testingLib',
            choices: ['none', 'Testing Library'],
        },
        {
            type: 'confirm',
            message: 'Do you use Storybook?',
            name: 'isUsingStorybook',
            default: false,
        },
    ])
        .then(function (answers) {
        callback ? callback(answers) : (0, createConfig_1.default)(answers);
    });
};
exports.default = prompt;
