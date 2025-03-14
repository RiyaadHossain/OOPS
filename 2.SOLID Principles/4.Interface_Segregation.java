/*
    Interface Segregation Principle:
    A client should never be forced to implement an interface that it doesn't use or clients shouldn't be forced to depend on methods they do not use.

    The principle suggests that instead of creating a large interface that covers all the possible methods, it's better to create smaller, more focused interfaces for specific use cases. This approach results in interfaces that are more cohesive and less coupled.
*/

interface Vehicle {
    void startEngine();
    void stopEngine();
    void accelerate();
    void fly();
}

// Car class violates the Interface Segregation Principle
// because it's forced to implement the fly method which is not applicable
class Car implements Vehicle {
    public void startEngine() {
        System.out.println("Car engine is on");
    }

    public void stopEngine() {
        System.out.println("Car engine is off");
    }

    public void accelerate() {
        System.out.println("Car is accelerating");
    }

    public void fly() {
        // Car can't fly, so this method is not applicable
    }
}

// Correct implementation of the Interface Segregation Principle
interface DriveableVehicle {
    void startEngine();
    void stopEngine();
    void accelerate();
}

interface FlyableVehicle {
    void fly();
}

// Truck class implements only the DriveableVehicle interface
// and doesn't have to implement the fly method
class Truck implements DriveableVehicle {
    public void startEngine() {
        System.out.println("Truck engine is on");
    }

    public void stopEngine() {
        System.out.println("Truck engine is off");
    }

    public void accelerate() {
        System.out.println("Truck is accelerating");
    }
}

public class InterfaceSegregation {
    public static void main(String[] args) {
        Truck myTruck = new Truck();
        myTruck.startEngine();
        myTruck.accelerate();
        myTruck.stopEngine();
    }
}
