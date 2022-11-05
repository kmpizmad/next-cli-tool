"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextConfigPath = void 0;
var prompt_1 = __importDefault(require("./prompt"));
exports.default = prompt_1.default;
var createConfig_1 = require("./createConfig");
Object.defineProperty(exports, "nextConfigPath", { enumerable: true, get: function () { return createConfig_1.nextConfigPath; } });
