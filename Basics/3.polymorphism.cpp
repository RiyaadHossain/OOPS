#include <bits/stdc++.h>
using namespace std;

/*
    Polymorphism: ability of a function to perform different tasks based on the object it is acting upon.
    - Compile Time Polymorphism: function overloading, operator overloading.
    - Run Time Polymorphism: function overriding using virtual functions.
*/

class Shape {
public:
    // Virtual function for runtime polymorphism
    virtual void area() {
        cout << "Calculating area of shape." << endl;
    }
};

class Circle : public Shape {
private:
    double radius;

public:
    // Constructor overloading (compile time polymorphism)
    Circle() {}

    Circle(double r) {
        radius = r;
    }

    void area() override {
        cout << "Area of Circle: " << 3.1416 * radius * radius << endl;
    }
};

class Rectangle : public Shape {
private:
    double length, width;

public:
    Rectangle(double l, double w) {
        length = l;
        width = w;
    }

    void area() override {
        cout << "Area of Rectangle: " << length * width << endl;
    }
};

int main() {
    // Compile time polymorphism through constructor overloading
    Circle c1(5.0);
    c1.area();

    Rectangle r1(4.0, 6.0);
    r1.area();

    // Run time polymorphism through base class pointer
    Shape* shape;

    shape = &c1;
    shape->area();

    shape = &r1;
    shape->area();

    return 0;
}
