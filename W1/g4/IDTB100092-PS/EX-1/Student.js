import { promises as fs } from 'fs'
const filePath = "./hello.txt";

// //Write to a file (synchronously)
// fs.writeFileSync(filePath, "Hello, Node.js beginner!");

// //Read the file (synchronously)
// const content = fs.readFileSync(filePath, "utf8");
// console.log("File content:", content);

try {
    //Write to a file (asynchronously)
    await fs.writeFile(filePath, "Hello, Node.js beginner!");

    //Read the file (asynchronously)
    const content = await fs.readFile(filePath, "utf8");
    console.log("File Content:", content);
} catch (err) {
    console.error("File operation error:", err);
}