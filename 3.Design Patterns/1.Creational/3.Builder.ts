/* 
    * Builder
    What: A creational design pattern that allows constructing complex objects step by step. It separates the construction of a complex object from its representation.
    When: When an object needs to be created with many optional parameters or when the construction process is complex.
    Why: To simplify the creation of complex objects and make the code more readable and maintainable.
    How: Define a builder class with methods for each step of the construction process. The builder class returns the final object.

    Example:
    A User object with multiple optional parameters (username, email, password, age, isAdmin).
    We need a flexible way to create User objects with different combinations of parameters.
    The Builder pattern allows us to create User objects step by step, making the code more readable and maintainable.
*/

class User {
  constructor(
    public username?: string,
    public email?: string,
    public password?: string,
    public age?: number,
    public isAdmin: boolean = false,
    public address?: string,
    public phone?: string
  ) {}
}

class UserBuilder {
  private user: User = new User();

  constructor() {
  }

  setUsername(username: string): this {
    this.user.username = username;
    return this;
  }

  setEmail(email: string): this {
    if (!email.includes("@")) throw new Error("Invalid email");
    this.user.email = email;
    return this;
  }

  setPassword(password: string): this {
    if (password.length < 6) throw new Error("Password too short");
    this.user.password = password;
    return this;
  }

  setAddress(address: string): this {
    this.user.address = address;
    return this;
  }

  setPhone(phone: string): this {
    if (!/^\d{10}$/.test(phone)) throw new Error("Invalid phone number");
    this.user.phone = phone;
    return this;
  }

  setAge(age: number): this {
    if (age < 0) throw new Error("Age cannot be negative");
    this.user.age = age;
    return this;
  }

  makeAdmin(): this {
    this.user.isAdmin = true;
    return this;
  }

  build(): User {
    return this.user;
  }
}

// Usage
const user = new UserBuilder()
  .setUsername("john_doe")
  .setEmail("john@example.com")
  .setAge(25)
  .makeAdmin()
  .build();

console.log(user); // Output: User { username: "john_doe", email: "john@example.com", age: 25, isAdmin: true }
