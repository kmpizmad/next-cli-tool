#!/usr/bin/env node
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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
var config_1 = __importStar(require("./config"));
var commands_1 = __importStar(require("./commands"));
(0, fs_1.readFile)(config_1.nextConfigPath, { encoding: 'utf-8' }, function (err, data) {
    var config = null;
    if (err)
        (0, config_1.default)(function (answers) { return console.log(answers); });
    else
        config = JSON.parse(data);
    console.log('Config object:', config);
    var pkgPath = (0, path_1.resolve)(process.cwd(), 'package.json');
    var pkg = (0, fs_1.readFileSync)(pkgPath, { encoding: 'utf-8' });
    var program = (0, commands_1.default)(JSON.parse(pkg));
    var generatorCommand = program.command('generate <type>').alias('g');
    (0, commands_1.generateComponent)(generatorCommand);
    (0, commands_1.generatePage)(generatorCommand);
    (0, commands_1.generateHook)(generatorCommand);
    (0, commands_1.generateHoc)(generatorCommand);
    generatorCommand.description('Defines what type of component to generate');
    program.parse();
});
