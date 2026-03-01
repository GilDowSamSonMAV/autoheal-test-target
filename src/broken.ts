// This file intentionally contains TypeScript errors for testing AutoHeal

interface User {
  name: string;
  age: number;
}

// Missing return type annotation
function createUser(name: string, age: number) {
  return {
    name,
    age,
    // Extra property not in interface
    email: "user@example.com"
  };
}

// Type mismatch - should be number
const userAge: string = 25;

// Missing type annotation
function processUser(user) {
  console.log(user.name);
  // Accessing non-existent property
  console.log(user.nonExistentProperty);
}

// Wrong type assignment
const myUser: User = {
  name: "John",
  age: "thirty" // Should be number, not string
};

// Using undefined variable
const result = undefinedVariable + 10;

// Missing import
const data: Map<string, number> = new Map();

export { createUser, processUser };
