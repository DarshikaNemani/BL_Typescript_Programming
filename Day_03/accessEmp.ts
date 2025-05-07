class Employee {
    public name: string;
    private salary: number;
    protected dept: string;

    constructor(name: string, salary: number, dept: string) {
        this.name = name;
        this.salary = salary;
        this.dept = dept;
    }

    getDetails() {
        console.log(`${this.name} ${this.salary} ${this.dept}`);
    }
}

class Manager extends Employee {

    getDetails() {
        console.log(`${this.name} ${this.dept}`);
    }
}

const m1 = new Manager("Darshika", 90000, "IT");
m1.getDetails();