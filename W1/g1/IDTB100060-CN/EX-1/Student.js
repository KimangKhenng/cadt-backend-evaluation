import fs from 'fs';

const filePath = "/Users/nikachhun/Documents/Year 2/Term_3/Backend-Development/WEEK-01/start-code/EX-1/hello.txt";
// Write to a file (synchronously)
fs.writeFileSync(filePath, "Hello, Node.js beginner!");
// Read the file (synchronously)
const content = fs.readFileSync(filePath, "utf8");
console.log("File content:", content);