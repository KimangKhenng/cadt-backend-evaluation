import fs from "fs/promises";
const filePath = "./hello.txt";
await fs.writeFile(filePath, "Hello, Node.js beginner!");
const content = await fs.readFile(filePath, "utf8");
console.log(" File content:", content);

// What’s happen when you change and save you code now? 
// 	It will write  Hello, Node.js beginner! in to file 
// hello.txt and output content that read from file.