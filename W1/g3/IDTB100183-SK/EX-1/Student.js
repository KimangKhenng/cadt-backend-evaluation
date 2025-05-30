import fs from "fs";
const filePath = "./hello.txt";
//write to the file 
fs.writeFileSync(filePath,"Hello, Node.js beginner!");

//read to the file
const content =fs.readFileSync(filePath,"utf8");
console.log("file content:", content);
