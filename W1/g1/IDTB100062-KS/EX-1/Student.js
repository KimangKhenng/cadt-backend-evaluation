import fs from "fs";

const filePath = "./hello.txt";

fs.writeFileSync(filePath, "Hello, Node.js beginner!");

const content = fs.readFileSync(filePath, "utf-8");
console.log("File content:", content);

//When running with nodemon, with every changes i made, it automatically restarts the Node.js.

async function readandWriteFile() {
    try {
        await fs.promises.writeFile(filePath, "Hello, Node.js beginner 1!");
        const data = await fs.promises.readFile(filePath, "utf-8");
        console.log("File content:", data);
    } catch (error) {
        console.error("Error reading file:", error);
    }
}

readandWriteFile();