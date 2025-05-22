import { promises as fs } from "fs";

const filepath = ".hello.txt";

async function readWriteFile() {
    try {
        await fs.writeFile(filepath, "Hello, Node.js beginner!");

        const data = await fs.readFile(filepath, "utf-8");

        console.log("File content:", data);
    } catch (error) {
        console.error("Error handling file:", error);
    }
}

readWriteFile();
