// Student.js
import fs from "fs/promises";

const filePath = "./hello.txt";

async function run() {
    try {
        // Write to the file (asynchronously)
        await fs.writeFile(filePath, "Hello from async Node.js!");
        
        // Read from the file (asynchronously)
        const content = await fs.readFile(filePath, "utf8");
        console.log("File content:", content);
    } catch (error) {
        console.error("Error handling file:", error);
    }
}

run();

