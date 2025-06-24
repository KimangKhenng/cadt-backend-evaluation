/* const filePath = "./hello.txt";

//write to a file (synchronously)
fs.writeFileSync(filePath, "Hello, Node.js beginner!");

//read from a file (synchronously)
const content = fs.readFileSync(filePath, "utf8")
console.log("File content:", content); */

import { promises as fs } from 'fs'; // Use promises version of fs

const filePath = "./hello.txt";

async function writeAndReadFile() {
  try {
    // Write to a file (asynchronously)
    await fs.writeFile(filePath, "Hello, Node.js beginner!");

    // Read the file (asynchronously)
    const content = await fs.readFile(filePath, "utf8");
    console.log("File content:", content);
  } catch (error) {
    console.error("Error:", error);
  }
}

writeAndReadFile();
