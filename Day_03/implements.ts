interface Printable{
    print(): void;
}

class Documents implements Printable{
    print(){
        console.log("Printing document...");
    }
}

const doc = new Documents();
doc.print();