class Student {
    rollno: number;
    name: string;
    marks: number;
  
    constructor(rollno: number, name: string, marks: number) {
      this.rollno = rollno;
      this.name = name;
      this.marks = marks;
    }
  
    display() {
      console.log(`Roll number of ${this.name} is ${this.rollno} and marks are ${this.marks}`);
    }
  }
  
  const stud1 = new Student(1, "Darshika", 90);
  stud1.display();
  