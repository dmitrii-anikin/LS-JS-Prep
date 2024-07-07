let readlineSync = require("readline-sync");
let name = readlineSync.question("What is your name?\n");
console.log(`Hello, ${name}`);
