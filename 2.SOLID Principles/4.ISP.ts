/*  
    4. Interface Segregation Principle (ISP)
    
    Definition: Clients shouldn't be forced to depend on interfaces they don't use.

    Action: eparate interfaces in small modules so that clients only need the methods that are relevant to them.
*/

interface Vehicle {
    startEngine(): void;
    stopEngine(): void;
    drive(): void;
    fly(): void;
}

class Car extends Vehicle {
    startEngine(): void {
        console.log("Car engine started.");
    }
    stopEngine(): void {
        console.log("Car engine stopped.");
    }
    drive(): void {
        console.log("Car is driving.");
    }
    fly(): void {
        throw new Error("Cars cannot fly.");
    }
}

/*  
    In this example, the Car class implements the Vehicle interface, but it throws an error when trying to call fly(), which is not applicable to cars.
    
    To Fix: we can create a separate interface for flying vehicles.
*/

interface DrivableVehicle {
    startEngine(): void;
    stopEngine(): void;
    drive(): void;
}

interface FlyableVehicle {
    fly(): void;
}
