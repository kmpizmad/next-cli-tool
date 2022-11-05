"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var createConfig = function (nextConfigPath, answers) {
    (0, fs_1.writeFile)(nextConfigPath, JSON.stringify(answers, null, 2), { encoding: 'utf-8' }, function (err) {
        if (err)
            console.log(err);
        else
            console.log('Successfully created next.json config file.');
    });
};
exports.default = createConfig;
