var Student = /** @class */ (function () {
    function Student(rollno, name, marks) {
        this.rollno = rollno;
        this.name = name;
        this.marks = marks;
    }
    Student.prototype.display = function () {
        console.log("Roll number of ".concat(this.name, " is ").concat(this.rollno, " and marks are ").concat(this.marks));
    };
    return Student;
}());
var stud1 = new Student(1, "Darshika", 90);
stud1.display();
