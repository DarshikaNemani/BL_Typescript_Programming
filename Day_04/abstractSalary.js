var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
var Full = /** @class */ (function (_super) {
    __extends(Full, _super);
    function Full(hour) {
        var _this = _super.call(this) || this;
        _this.hour = hour;
        return _this;
    }
    ;
    Full.prototype.calcSalary = function () {
        return this.hour * 16;
    };
    return Full;
}(Employee));
var Part = /** @class */ (function (_super) {
    __extends(Part, _super);
    function Part(hour) {
        var _this = _super.call(this) || this;
        _this.hour = hour;
        return _this;
    }
    ;
    Part.prototype.calcSalary = function () {
        return this.hour * 8;
    };
    return Part;
}(Employee));
var f = new Full(10);
console.log("Full-time salary:", f.calcSalary());
var p = new Part(10);
console.log("Part-time salary:", p.calcSalary());
