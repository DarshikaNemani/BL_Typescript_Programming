class Vehicle{
    start(){
        console.log("Starting Vehicle...");
    }
}

class Cars extends Vehicle{
    override start(){
        console.log("Car is ready to drive!");
    }
}


const cars = new Cars() 
cars.start();