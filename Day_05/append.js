"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var content = 'ABCDEFG, appended.';
fs.appendFile('sample.txt', content, function (err) {
    if (err) {
        console.log('Error aa gaya:', err);
    }
    console.log('Appended');
});
