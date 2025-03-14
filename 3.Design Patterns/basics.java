class Person {
    public String name;
    public Integer age;
    protected int nid; // protected access modifier -> can be accessed by the child class
    
    // constructor overloading -> compile time polymorphism
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    public Person(String name, int age, int nid) {
        this.name = name;
        this.age = age;
        this.nid = nid;
    }


    public void getInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
}

// inheritance
class Employee extends Person {
    public String company;
    private int salary; // private access modifier -> can only be accessed by instance of the same class


    public Employee(String name, int age, String company , int nid, int salary) {
        super(name, age, nid); // invoking the constructor of the parent class
        this.company = company;
    }

    @Override
    public void getInfo() {
        super.getInfo();
        System.out.println("Company: " + company);
    }
}

interface IStudent {
    public String name;
    private int roll;
    void getRoll();
}

// polymorphism
class Student extends Person {
    public String dept;

    public Student(String name, int age, String dept, int nid) {
        super(name, age, nid);
        this.dept = dept;
    }

    @Override
    public void getInfo() {
        super.getInfo();
        System.out.println("Department: " + dept);
    }
}
