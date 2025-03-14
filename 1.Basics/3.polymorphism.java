import java.util.*;

/*
    Polymorphism: ability of a function to perform different tasks based on the object it is acting upon.
    - Compile Time Polymorphism: method overloading, operator overloading.
    - Run Time Polymorphism: method overriding using virtual functions.
*/

abstract class Shape {
    // Abstract method for runtime polymorphism
    abstract void area();
}

class Circle extends Shape {
    private double radius;

    // Constructor overloading (compile time polymorphism)
    Circle() {}

    Circle(double r) {
        radius = r;
    }

    @Override
    void area() {
        System.out.println("Area of Circle: " + 3.1416 * radius * radius);
    }
}

class Rectangle extends Shape {
    private double length, width;

    Rectangle(double l, double w) {
        length = l;
        width = w;
    }

    @Override
    void area() {
        System.out.println("Area of Rectangle: " + length * width);
    }
}

public class Main {
    public static void main(String[] args) {
        // Compile time polymorphism through constructor overloading
        Circle c1 = new Circle(5.0);
        c1.area();

        Rectangle r1 = new Rectangle(4.0, 6.0);
        r1.area();

        // Run time polymorphism through base class reference
        Shape shape;

        shape = c1;
        shape.area();

        shape = r1;
        shape.area();
    }
}
