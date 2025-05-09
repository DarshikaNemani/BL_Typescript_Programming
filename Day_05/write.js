"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var content = "Hello ji, me write se aaya hu.";
fs.writeFile('sample.txt', content, function (err) {
    if (err) {
        console.log("Error while writing", err);
    }
    console.log("Content added to file");
});
