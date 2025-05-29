import fs from 'fs/promises';  // IMPORTANT: add this line to fix the missing FS import !!!

const filePath = "./hello.txt";

async function main(){
    // Write to a file (asychronously)
    await fs.writeFile(filePath, "Hello, Node.js async beginner!!");
}

// Write to a file (synchronously)
// fs.writeFileSync(filePath, "Hello, Node.js beginner!!");

// Read the file (asynchronously)
const content = await fs.readFileSync(filePath, "utf8");
console.log("File content:", content);

main().catch(console.error);