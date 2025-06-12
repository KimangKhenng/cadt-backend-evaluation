import { promises as fs } from "fs";

const filePath = "hello.txt";

async function handleFileOperations() {
  try {
    // Write to a file (asynchronously)
    await fs.writeFile(filePath, "Hello, Node.js beginner!");
    console.log("File written successfully!");

    // Read the file (asynchronously)
    const content = await fs.readFile(filePath, "utf8");
    console.log("File content:", content);
  } catch (error) {
    console.error("Error handling file:", error);
  }
}

handleFileOperations();