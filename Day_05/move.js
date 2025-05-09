"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var newPath = "./old/sample.txt";
var oldPath = "./new/sample.txt";
fs.rename(oldPath, newPath, function (err) {
    if (err) {
        console.log(err);
    }
    console.log("Moved.");
});
