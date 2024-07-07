let readlineSync = require("readline-sync");
let firstName = readlineSync.question("What is your first name?\n");
let lastName = readlineSync.question("What is your last name?\n");
console.log(`Hello, ${firstName} ${lastName}!`);
