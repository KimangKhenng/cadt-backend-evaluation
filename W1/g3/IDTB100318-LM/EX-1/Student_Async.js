import { writeFile, readFile } from 'node:fs/promises';

const filePath = "./hello.txt";

// Write to a file (Asynchronously)
await writeFile(filePath, "Hello, Node.js beginner!");

// Read the file (Asynchronously)
const content = await readFile(filePath, "utf8");
console.log("File content:", content);