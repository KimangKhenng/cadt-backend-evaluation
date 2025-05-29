import fs from "fs";

const filePath = "D:/year_02/term_03/Backend Development/Lab01_Week01/Start code/EX-1/hello.txt";

// Write to a file (synchronously)
fs.writeFileSync(filePath, "Hello, Node.js beginner!");

// Read the file (synchronously)
const content = fs.readFileSync(filePath, "utf8");

console.log("File content:", content);

// What’s happen when you change and save you code now?
// Answer: when we change and save something in code , the nodemon will automatically restart the node.js app to run the last version.


