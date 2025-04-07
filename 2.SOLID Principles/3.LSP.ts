/*  

    3. Liskov Substitution Principle (LSP)
    
    Definition: Objects of a parent class should be replaceable with objects of its child class without breaking the application.

    Action: This parent class will have the general methods and properties, while the child classes will have specific implementations.
*/

interface Bike {
    turnOnEngine(): void;
    accelerate(): void;
}

class MotorBike implements Bike {
    turnOnEngine(): void {
        console.log("MotorBike engine is on.");
    }
    accelerate(): void {
        console.log("MotorBike is accelerating.");
    }
}

class Bycle implements Bike {
    turnOnEngine(): void {
        throw new Error("Bicycles do not have engines.");
    }
    accelerate(): void {
        console.log("Bycle is accelerating.");
    }
}

/*  
    In this example, the Bycle class violates the LSP because it throws an error when trying to call turnOnEngine(), which is not applicable to bicycles.
    
    To Fix: we can create a separate interface for vehicles that do not have engines.
*/