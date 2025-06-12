import fs from "fs";

const filePath = "./hello.txt";

//write to file (synchronously)
fs.writeFileSync(filePath, "Hello, Node.js beginner!");

//read the file (synchrously)
const content = fs.readFileSync(filePath, "utf8");
console.log("File content:",content);