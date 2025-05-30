import fs from 'fs/promises';

const filePath = "./hello.txt";

// Write to a file
await fs.writeFile(filePath, "Hello, Node.js Beginner!");

// Read the file
const content = await fs.readFile(filePath, "utf8");

console.log("File content:", content);
