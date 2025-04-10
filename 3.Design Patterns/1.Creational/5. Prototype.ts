/*  
    * Prototype Design Pattern
    What: A creational design pattern that allows creating new objects by copying an existing object, known as the prototype.
    When: cost of creating a new object is more expensive(ex. network call) than copying an existing one, want to hide object creation logic,creating variations of objects without subclassing.
    Why: To avoid the overhead of creating new objects and to provide a simple way to create complex objects.
    How: Define a prototype interface with a clone method. Implement the clone method in concrete classes to return a copy of the object.

    Example:
    A game where we have different types of characters (Warrior, Mage, Archer).
    We need a way to create new characters based on existing ones without rewriting the code.

    ,allows us to create new characters by cloning existing ones, making the code more flexible and maintainable.
    ,is useful when we need to create many similar objects with slight variations.
    ,is also useful when we need to create objects that are expensive to create or when we need to create objects with a complex initialization process.
*/

// Step 1: Prototype Interface
interface AvatarPrototype {
  clone(): AvatarPrototype;
}

// Step 2: Concrete Avatar Class
class Avatar implements AvatarPrototype {
  constructor(
    public type: string,
    public skinColor: string,
    public gear: string[],
    public name: string = "Default"
  ) {}

  clone(): Avatar {
    // Deep copy to avoid shared references for arrays
    return new Avatar(this.type, this.skinColor, [...this.gear], this.name);
  }
}

class AvatarRegistry {
  private avatars: Map<string, Avatar> = new Map();

  register(type: string, avatar: Avatar) {
    this.avatars.set(type, avatar);
  }

  getClone(type: string): Avatar | null {
    const avatar = this.avatars.get(type);
    return avatar ? avatar.clone() : null;
  }
}

const registry = new AvatarRegistry();

// Register base avatars
registry.register("warrior", new Avatar("Warrior", "Tan", ["Sword", "Shield"]));
registry.register("wizard", new Avatar("Wizard", "Pale", ["Staff", "Robe"]));

// Clone and customize for user1
const user1Avatar = registry.getClone("warrior");
if (user1Avatar) {
  user1Avatar.name = "RiyadTheBrave";
  user1Avatar.gear.push("Helmet");
  console.log("User 1 Avatar:", user1Avatar);
}

// Clone and customize for user2
const user2Avatar = registry.getClone("wizard");
if (user2Avatar) {
  user2Avatar.name = "MageOfCode";
  user2Avatar.skinColor = "Blue";
  console.log("User 2 Avatar:", user2Avatar);
}
