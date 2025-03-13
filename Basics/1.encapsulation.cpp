#include <bits/stdc++.h>
using namespace std;

/*
    Encapsulation: wrapping up of data and methods into a single unit called class.
    - Data Hiding: hiding the data from outside the class.
    - Access Specifiers: public, private, protected.
*/
class Student
{
    //  Attributes with Access Specifiers
public: // public members are accessible from outside the class
    string name, dept, user_name;
    int age;

private: // private members are not accessible from outside the class
    string password;

protected: // protected members are accessible from derived classes
    string address;

// constructor
public:
    Student(string name, string dept, string user_name, int age, string password, string address)
    {

        /*
            - this pointer is used to refer to the current object
            - this-> means (*this).attributes; dereference and access the attributes
        */
        this->name = name; 
        this->dept = dept;
        this->user_name = user_name;
        this->age = age;
        this->password = password;
        this->address = address;
    }

    // copy constructor: used to copy the attributes of one object to another object
    Student(Student &s)
    {
        name = s.name;
        dept = s.dept;
        user_name = s.user_name;
        age = s.age;
        password = s.password;
        address = s.address;
    }

    //  Member Functions
public:
    void set_password(string pass) // Setter Function
    {
        password = pass;
    }

    string get_password() // Getter Function
    {
        return password;
    }

    void get_info() {
        cout << "Name: " << name << endl;
        cout << "Department: " << dept << endl;
        cout << "User Name: " << user_name << endl;
        cout << "Age: " << age << endl;
        cout << "Address: " << address << endl;
    }
};

int main()
{
    Student s1("John Doe", "CSE", "john_doe", 20, "1234", "Dhaka");
    s1.get_info();
    return 0;
}