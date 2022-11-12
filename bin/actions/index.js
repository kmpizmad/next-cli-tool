"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var generateComponent_1 = __importDefault(require("./generateComponent"));
var generatePage_1 = __importDefault(require("./generatePage"));
var generateHook_1 = __importDefault(require("./generateHook"));
var generateHoc_1 = __importDefault(require("./generateHoc"));
var actions = { component: generateComponent_1.default, page: generatePage_1.default, hook: generateHook_1.default, hoc: generateHoc_1.default };
exports.default = actions;
