import { promises as fs } from "fs";
const filePath = "./hello.txt";

async function handleFile() {
    try {
        // Write to a file (asynchronously)
        await fs.writeFile(filePath, "Hello, Lyming beginner!");

        // Read from a file (synchronously)
        const content = await fs.readFile(filePath, "utf8");
        console.log("File Content: ", content);
    } catch (error) {
        console.log("Error handling file:", error);
    }
}

handleFile();