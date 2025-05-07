var Documents = /** @class */ (function () {
    function Documents() {
    }
    Documents.prototype.print = function () {
        console.log("Printing document...");
    };
    return Documents;
}());
var doc = new Documents();
doc.print();
