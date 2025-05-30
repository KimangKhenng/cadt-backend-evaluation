import fs from 'fs/promises'; 

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