import java.util.*;

/*
    Abstraction: hiding the complex implementation details and showing only the necessary features of an object.
    - Data Abstraction: hiding the internal details of how an object works.
    - Abstract Class: class that contains at least one abstract method.
    - Abstract Method: method that has no implementation in the base class and must be overridden in the derived class.
*/

class Bank {

    public String name, address;

    // Example of Data Abstraction by hiding the password and account_no
    private String password;
    protected String account_no;
}

/* 
    Abstract Class: 
    - blueprint for derived classes.
    - contains at least one abstract method.
    - cannot be instantiated.
*/
abstract class Shape {
    // Abstract method (no implementation in the parent class and must be overridden in the child class)
    abstract void area();
}

class Circle extends Shape {
    private double radius;

    public Circle(double r) {
        radius = r;
    }

    @Override
    void area() {
        System.out.println("Area of Circle: " + 3.1416 * radius * radius);
    }
}

public class Main {
    public static void main(String[] args) {
        Circle circle = new Circle(5.0);
        circle.area();
    }
}
