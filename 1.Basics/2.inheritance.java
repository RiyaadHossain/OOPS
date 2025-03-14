import java.util.*;


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

class Person {
    public String name;
    public int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void getInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
}

// Single Inheritance
class Student extends Person {
    public String dept;

    public Student(String name, int age, String dept) {
        super(name, age);
        this.dept = dept;
    }

    @Override
    public void getInfo() {
        super.getInfo();
        System.out.println("Department: " + dept);
    }
}

// Multilevel Inheritance
class Volunteer extends Student {
    public String organization;

    public Volunteer(String name, int age, String dept, String organization) {
        super(name, age, dept);
        this.organization = organization;
    }

    @Override
    public void getInfo() {
        super.getInfo();
        System.out.println("Organization: " + organization);
    }
}

class Employee {
    public String company;

    public Employee(String company) {
        this.company = company;
    }

    public void getInfo() {
        System.out.println("Company: " + company);
    }
}

// Multiple Inheritance
class Manager extends Person {
    public String department;
    public String company;

    public Manager(String name, int age, String company, String department) {
        super(name, age);
        this.company = company;
        this.department = department;
    }

    @Override
    public void getInfo() {
        super.getInfo();
        System.out.println("Company: " + company);
        System.out.println("Department: " + department);
    }
}

public class Main {
    public static void main(String[] args) {
        Person person = new Person("John Doe", 45);
        person.getInfo();
        System.out.println();

        Student student = new Student("Alice Smith", 20, "Computer Science");
        student.getInfo();
        System.out.println();

        Volunteer volunteer = new Volunteer("Bob Brown", 22, "Mechanical Engineering", "Red Cross");
        volunteer.getInfo();
        System.out.println();

        Manager manager = new Manager("Charlie Johnson", 35, "Tech Corp", "Sales");
        manager.getInfo();
        System.out.println();
    }
}
