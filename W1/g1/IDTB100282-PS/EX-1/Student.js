/** @format */
import fs from "fs";
// Importing the fs module to work with the file system
const filePath = "./hello.txt";
// Write to a file (synchronously)
fs.writeFileSync(filePath, "Hello, Node.js beginner!");
// Read the file (synchronously)
const content = fs.readFileSync(filePath, "utf8");
console.log("File content:", content);
