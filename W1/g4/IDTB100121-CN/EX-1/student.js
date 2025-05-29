import FileSystem from "fs";

const  filePath = "./hello.txt";

// Write to a file (synchronous)
FileSystem.writeFileSync(filePath, "Hello, Node.js beginner!");

// Read from a file (synchronous)
const content = FileSystem.readFileSync(filePath, "utf-8");
console.log("File content:", content);