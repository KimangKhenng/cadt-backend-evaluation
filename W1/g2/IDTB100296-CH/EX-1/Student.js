/*import fs from 'fs';

const filePath = "./hello.txt";

// Write to a file (synchronously)
fs.writeFileSync(filePath, "Hello, Node.js beginner!");
// Read the file (synchronously)
const content = fs.readFileSync(filePath, "utf8");
console.log("file content:", content);*/
import fs from 'fs/promises'; //using the promises version

const filePath = "./hello.txt";

async function fileOperations() {
    try {
        // Write to a file (asynchronously)
        await fs.writeFile(filePath, "Hello, Node.js beginner!");
        console.log("File written successfully");
        
        // Read the file (asynchronously)
        const content = await fs.readFile(filePath, "utf8");
        console.log("File content:", content);
    } catch (err) {
        console.error("Error:", err);
    }
}

fileOperations();