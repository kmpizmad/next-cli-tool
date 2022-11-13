"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
var path_1 = require("path");
var fs_1 = require("fs");
var createProgram_1 = __importDefault(require("./createProgram"));
var generator_1 = require("./generator");
exports.default = createProgram_1.default;
__exportStar(require("./generator"), exports);
var run = function (config) {
    var pkgPath = (0, path_1.resolve)(process.cwd(), 'package.json');
    var pkg = (0, fs_1.readFileSync)(pkgPath, { encoding: 'utf-8' });
    var program = (0, createProgram_1.default)(JSON.parse(pkg));
    var generatorCommand = program.command('generate <type>').alias('g');
    if (config.modules.includes('components'))
        (0, generator_1.generateComponent)(config, generatorCommand);
    if (config.modules.includes('pages'))
        (0, generator_1.generatePage)(config, generatorCommand);
    if (config.modules.includes('hooks'))
        (0, generator_1.generateHook)(config, generatorCommand);
    if (config.modules.includes('higher-order components'))
        (0, generator_1.generateHoc)(config, generatorCommand);
    generatorCommand.description('Defines what type of component to generate');
    program.parse();
};
exports.run = run;
