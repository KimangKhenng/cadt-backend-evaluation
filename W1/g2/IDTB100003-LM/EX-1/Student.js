import fs from "fs";


const filePath = "./hello.txt";
fs.writeFileSync(filePath,"hello world");

const content = fs.readFileSync(filePath,"utf8");
console.log("File content:", content);



