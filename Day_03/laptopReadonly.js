var Laptop = /** @class */ (function () {
    function Laptop(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    return Laptop;
}());
var l1 = new Laptop("HP", "Pavilion");
l1.brand = "Dell";
