// import fs from 'fs';
// const filePath = "./hello.txt";
// //write to a file (synchronously) 
// fs.writeFileSync(filePath,"Hello, Node.js beginner!");
 
// //read the file(synchronously)
// const content = fs.readFileSync(filePath,"utf8");
// console.log("File content:", content);
import fs from 'fs/promises';

const filePath = "./hello.txt";

async function handleFile() {
  try {
    // Write to file (async)
    await fs.writeFile(filePath, "Hello, async Node.js!");

    // Read file (async)
    const content = await fs.readFile(filePath, "utf8");
    console.log("File content:", content);
  } catch (err) {
    console.error("Error:", err);
  }
}

handleFile();
