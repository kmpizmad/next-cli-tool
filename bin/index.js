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
var commander_1 = require("commander");
var cli_1 = __importStar(require("./cli"));
(0, fs_1.readFile)(cli_1.nextConfigPath, { encoding: 'utf-8' }, function (err, data) {
    var config = err ? (0, cli_1.default)() : JSON.parse(data);
    var pkg = (0, fs_1.readFileSync)((0, path_1.resolve)(process.cwd(), 'package.json'), { encoding: 'utf-8' });
    var _a = JSON.parse(pkg), name = _a.name, description = _a.description, version = _a.version;
    console.log(config);
    var program = new commander_1.Command(name);
    program.description(description);
    program.version(version, '-v, --version');
    program.parse();
});
