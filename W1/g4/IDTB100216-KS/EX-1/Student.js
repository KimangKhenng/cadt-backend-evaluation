import fs from "fs";
const filePath = "./hello.txt";

// write to a file (synchronous)
fs.writeFileSync(filePath, "Hello, Node.js beginner!");

// read from a file (synchronous)
const content = fs.readFileSync(filePath, "utf-8");
console.log("file content: ", content); // Output: Hello, Node.js beginner!