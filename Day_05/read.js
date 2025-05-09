"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
fs.readFile('sample.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log('Error reading file:' + err);
        return;
    }
    console.log('File contents:', data);
});
