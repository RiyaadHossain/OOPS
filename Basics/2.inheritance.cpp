#include <bits/stdc++.h>
using namespace std;

/*
    Inheritance: child class derived the properties and methods of parent class.

    Types of Inheritance:
    1. Single Inheritance: one class inherits the properties and methods of another class.
    2. Multiple Inheritance: one class inherits the properties and methods of more than one class.
    3. Multilevel Inheritance: one class inherits the properties and methods of another class, and that class inherits the properties and methods of another class.
    4. Hybrid Inheritance: combination of two or more types of inheritance.

    Inheritance Modes:
    1. Public Mode: public members of the base class become public members of the derived class.
    2. Protected Mode: public members of the base class become protected members of the derived class.
    3. Private Mode: public members of the base class become private members of the derived class.

     Access Specifier Inheritance Behavior:

    | Parent Access Specifier | Public Inheritance | Protected Inheritance | Private Inheritance |
    |-------------------------|--------------------|-----------------------|---------------------|
    | public                  | public             | protected             | private             |
    | protected               | protected          | protected             | private             |
    | private                 | Not Inherited      | Not Inherited          | Not Inherited       |
*/

class Person
{
public:
    string name;
    int age;

    Person(string name, int age)
    {
        this->name = name;
        this->age = age;
    }

    void get_info()
    {
        cout << "Name: " << name << endl;
        cout << "Age: " << age << endl;
    }
};

// Single Inheritance
class Student : public Person
{
public:
    string dept;

    Student(string name, int age, string dept) : Person(name, age)
    {
        this->dept = dept;
    }

    void get_info()
    {
        cout << "Name: " << name << endl;
        cout << "Age: " << age << endl;
        cout << "Department: " << dept << endl;
    }
};

// Multilevel Inheritance
class Volunteer : public Student
{
public:
    string organization;
    Volunteer(string name, int age, string dept, string organization) : Student(name, age, dept)
    {
        this->organization = organization;
    }

    void get_info()
    {
        cout << "Name: " << name << endl;
        cout << "Age: " << age << endl;
        cout << "Department: " << dept << endl;
        cout << "Organization: " << organization << endl;
    }
};

class Employee 
{
public:
    string company;
    Employee( string company) 
    {
        this->company = company;
    }

    void get_info()
    {
        cout << "Company: " << company << endl;
    }
};

// Multiple Inheritance
class Manager: public Person, public Employee
{
public:
    string department;
    Manager(string name, int age, string company, string department) : Person(name, age), Employee(company)
    {
        this->department = department;
    }

    void get_info()
    {
        cout << "Name: " << name << endl;
        cout << "Age: " << age << endl;
        cout << "Company: " << company << endl;
        cout << "Department: " << department << endl;
    }
};


int main()
{

    return 0;
}