import fs from 'fs';

const filepath = "./hello.txt";

//Write to a file 
fs.writeFileSync(filepath, "Hello, Node.js beginner!");

//Read from a file
const content = fs.readFileSync(filepath, "utf-8");
console.log("File content: ", content);