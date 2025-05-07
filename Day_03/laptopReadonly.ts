class Laptop{
    constructor(
        readonly brand: string,
        readonly model: string
    ){}
}

const l1 = new Laptop("HP", "Pavilion");
l1.brand = "Dell"; 