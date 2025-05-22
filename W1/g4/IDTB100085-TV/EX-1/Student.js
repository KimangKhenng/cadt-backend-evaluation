// Import fs for fileSystem
import fs from 'fs/promises';

const filePath = "./hello.txt";

async function handleFile() {
    try{
        // Write to file (synchronously)
        await fs.writeFile(filePath, "Hello, Node.js beginner!");

        // Read file (synchronously)
        const content = await fs.readFile(filePath, "utf8");
        console.log("File content:", content);
    }
    catch (error){
        console.error("Error", error)
    }
}

handleFile();