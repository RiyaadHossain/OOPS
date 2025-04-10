/*  
    * Singleton Pattern
    What: A creational design pattern that restricts the instantiation of a class to one single instance and provides a global point of access to it.
    When: When you need to control access to shared resources, such as a configuration object or a database.
    Why: To ensure that a class has only one instance and to provide a global point of access to it.
    How: Use a private constructor and a static method to create and access the instance. The static method checks if the instance already exists and creates it if it doesn't.

    Example:
    A database connection manager that should only have one instance throughout the application.
*/

// Step 1: Singleton Class
class DatabaseConnection {
  private static instance: DatabaseConnection;

  private constructor(private connectionString: string) {
    console.log("Database connection established.");
  }

  public static getInstance(connectionString: string): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection(connectionString);
    }
    return DatabaseConnection.instance;
  }

  public query(sql: string): void {
    console.log(`Executing query: ${sql}`);
  }
}

// Step 2: Usage
const db1 = DatabaseConnection.getInstance("Server=myServer;Database=myDB;");
const db2 = DatabaseConnection.getInstance("Server=anotherServer;Database=anotherDB;");

// Both db1 and db2 point to the same instance
db1.query("SELECT * FROM users;");
db2.query("SELECT * FROM orders;");