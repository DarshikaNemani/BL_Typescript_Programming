"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
fs.unlink("./old/sample.txt", function (err) {
    if (err) {
        console.log(err);
    }
    console.log("Removed.");
});
