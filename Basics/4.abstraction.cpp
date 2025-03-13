#include <bits/stdc++.h>
using namespace std;

/*
    Abstraction: hiding the complex implementation details and showing only the necessary features of an object.
    - Data Abstraction: hiding the internal details of how an object works.
    - Abstract Class: class that contains at least one pure virtual function.
    - Pure Virtual Function: function that has no implementation in the base class and must be overridden in the derived class.
*/

class Bank
{

public:
    string name, address;

    // Example of Data Abstraction by hiding the password and account_no
private:
    string password;

protected:
    string account_no;
};

/* 
    Abstract Class: 
    - blueprint for derived classes.
    - contains at least one pure virtual function.
    - cannot be instantiated.
*/
class Shape
{
public:
    // Pure virtual function (no implementation in the parent class and must be overridden in the child class)
    virtual void area() = 0; 
};

class Circle : public Shape
{
private:
    double radius;

public:
    Circle(double r)
    {
        radius = r;
    }

    void area() override
    {
        cout << "Area of Circle: " << 3.1416 * radius * radius << endl;
    }
};

int main()
{

    return 0;
}