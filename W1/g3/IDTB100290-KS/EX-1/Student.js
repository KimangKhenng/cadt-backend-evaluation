
const filePath = "./hello.txt"; 

//import fs to fix error
import fs from 'fs';

// Write to a file (synchronously) 
fs.writeFileSync(filePath, "Hello, Node.js beginner!"); 

// Read the file (synchronously) 
const content = fs.readFileSync(filePath, "utf8"); 
console.log("File content:", content);

