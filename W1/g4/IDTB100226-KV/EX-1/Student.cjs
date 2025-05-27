const fs = require('fs');

const filePath = "./hello.txt";

//Write to the file (synchronously)
fs.writeFileSync(filePath, "Hello, Node.js beginner!!!");

//Read the file (synchrously)
const content = fs.readFileSync(filePath, "utf-8");
console.log("File content:",content); // Output: Hello, Node.js beginner!