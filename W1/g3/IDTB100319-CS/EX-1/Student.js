import { writeFileSync, readFileSync } from 'fs';
const filePath = "./hello.txt";

async function writeAndReadFile() {
    try {
        // Write to a file (synchronously) 
        await writeFileSync(filePath, "Hello, Node.js beginner!");

        // Read the file (synchronously) 
        const content = await readFileSync(filePath, "utf8");
        console.log("File content:", content);

    } catch (err) {
        console.error("Error writing to file:", err);
    }
}

writeAndReadFile();