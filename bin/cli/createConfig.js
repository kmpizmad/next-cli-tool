"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextConfigPath = void 0;
var fs_1 = require("fs");
var path_1 = require("path");
var nextConfigPath = (0, path_1.resolve)(process.cwd(), 'next.json');
exports.nextConfigPath = nextConfigPath;
var createConfig = function (answers) {
    (0, fs_1.writeFile)(nextConfigPath, JSON.stringify(answers, null, 2), { encoding: 'utf-8' }, function (err) {
        if (err)
            console.log(err);
        else
            console.log('Successfully created next.json config file.');
    });
};
exports.default = createConfig;
