// This file intentionally contains ESLint errors for testing AutoHeal

function greetUser(name) {
    // Missing semicolon below
    const message = "Hello, " + name;

    // Wrong indentation above
    console.log(message);    // Missing semicolon

    // Unused variable
    const unused = "This variable is never used";

    // == instead of ===
    if (name === "admin") {
        return "Welcome admin";  // Missing semicolon
    }

    return message;
}

// Missing semicolon
const user = greetUser("World");

// Undefined variable
let result = user;

module.exports = { greetUser };