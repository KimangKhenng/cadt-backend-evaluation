import fs from 'fs';

const filePath = "./hello.txt";

fs.writeFileSync(filePath, "Hello, Node.js beginner!");

const content = fs.readFileSync(filePath, "utf8");
console.log("File content:", content);