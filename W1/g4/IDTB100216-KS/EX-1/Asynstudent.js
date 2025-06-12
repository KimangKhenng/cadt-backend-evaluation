import { promises as fs } from "fs"; // Use fs.promises for async operations
const filePath = "./hello.txt";

async function handleFile() {
  try {
    // Write to a file (asynchronous)
    await fs.writeFile(filePath, "Hello, Node.js beginner!");

    // Read from a file (asynchronous)
    const content = await fs.readFile(filePath, "utf-8");
    console.log("file content: ", content); // Output: Hello, Node.js beginner!
  } catch (error) {
    console.error("Error handling the file:", error);
  }
}

handleFile();