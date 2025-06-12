import fs from "fs";
const filePath = "./hello.txt";

//write to a file (synchronously)
fs.promises.writeFile(filePath, "Hello, Node.js beginner!");

//read the file (synchronously)
const content = fs.promises.readFile(filePath, "utf8");
console.log("File Content:", content);
