/*  
    5. Dependency Inversion Principle (DIP)
    
    Definition: High-level modules shouldn't depend on low-level modules. Both should depend on abstractions.

    Example: Like using a standard power outlet interface - your appliances (high-level) don't depend on the power plant (low-level), both depend on the outlet standard.


*/

class MySQLDatabase {
  save(data: string) {
    console.log("Saving to MySQL:", data);
  }
}

class UserService {
  private db = new MySQLDatabase(); // tightly coupled

  saveUser(user: string) {
    this.db.save(user);
  }
}

/*  
    In this example, the UserService class is tightly coupled to the MySQLDatabase class, which makes it difficult to change the database implementation (Want to use MongoDB as database) without modifying the UserService class.
    
    To Fix: we can create an interface that defines the saving behavior and implement it in different classes.
*/

// Fix: instead of using a concrete class, we use an interface in the "UserService" class
interface Database {
  save(data: string): void;
}
