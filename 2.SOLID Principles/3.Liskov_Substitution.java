/*
    Liskov Substitution Principle:
    Objects of a superclass shall be replaceable with objects of its subclasses without breaking the application.
*/

abstract class Bike {
    public abstract void turnOnEngine();
    public abstract void accelerate();
}

class ElectricBike extends Bike {
    public void turnOnEngine() {
        System.out.println("Electric bike engine is on");
    }

    public void accelerate() {
        System.out.println("Electric bike is accelerating");
    }
}

// Cycle class isn't substitutable for Bike class (because it couldn't implement turnOnEngine method)
class Cycle extends Bike {
    // Cycle doesn't have an engine -> violates Liskov Substitution Principle
    public void turnOnEngine() {
        System.out.println("Cycle doesn't have an engine");
    }

    public void accelerate() {
        System.out.println("Cycle is accelerating");
    }
}

public class LiskovSubstitution {
    public static void main(String[] args) {
        Bike myBike = new ElectricBike();
        myBike.turnOnEngine();
        myBike.accelerate();

        Bike myCycle = new Cycle();
        myCycle.turnOnEngine();
        myCycle.accelerate();
    }
}
