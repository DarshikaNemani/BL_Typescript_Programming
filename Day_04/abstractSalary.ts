abstract class Employee{
    abstract calcSalary(): number;
}

class Full extends Employee{
    
    constructor(public hour: number){
        super();
    };
    
    calcSalary(): number {
        return this.hour * 16
    }
}

class Part extends Employee{
    constructor(public hour: number){
        super();
    };
    
    calcSalary(): number {
        return this.hour * 8
    }
}

const f = new Full(10);
console.log("Full-time salary:", f.calcSalary());

const p = new Part(10);
console.log("Part-time salary:", p.calcSalary());