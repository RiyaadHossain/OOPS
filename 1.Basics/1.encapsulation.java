import java.util.*;

/*
    Encapsulation: wrapping up of data and methods into a single unit called class.
    - Data Hiding: hiding the data from outside the class.
    - Access Specifiers: public, private, protected.
*/
class Student {
    //  Attributes with Access Specifiers
    public String name, dept, user_name;
    public int age; // public: can be accessed from anywhere
    private String password; // private: can only be accessed from within the class
    protected String address; // protected: can be accessed from within the class and its subclasses

    // constructor
    public Student(String name, String dept, String user_name, int age, String password, String address) {
        /*
            - this keyword is used to refer to the current object
            - this. means this object's attributes
        */
        this.name = name;
        this.dept = dept;
        this.user_name = user_name;
        this.age = age;
        this.password = password;
        this.address = address;
    }

    // copy constructor: used to copy the attributes of one object to another object
    public Student(Student s) {
        this.name = s.name;
        this.dept = s.dept;
        this.user_name = s.user_name;
        this.age = s.age;
        this.password = s.password;
        this.address = s.address;
    }

    //  Member Functions
    public void setPassword(String pass) { // Setter Function
        this.password = pass;
    }

    public String getPassword() { // Getter Function
        return this.password;
    }

    public void getInfo() {
        System.out.println("Name: " + this.name);
        System.out.println("Department: " + this.dept);
        System.out.println("User Name: " + this.user_name);
        System.out.println("Age: " + this.age);
        System.out.println("Address: " + this.address);
    }
}

public class Encapsulation {
    public static void main(String[] args) {
        Student s1 = new Student("John Doe", "CSE", "john_doe", 20, "1234", "Dhaka");
        s1.getInfo();
    }
}
