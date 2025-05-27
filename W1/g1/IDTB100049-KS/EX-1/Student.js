import fs from "fs/promises";

const filePath = "./hello.txt";

async function handleFile() {
  try {
    // Write to a file (asynchronously)
    await fs.writeFile(filePath, "Hello, Node.js beginner!");

    // Read the file (asynchronously)
    const content = await fs.readFile(filePath, "utf8");
    console.log("File content:", content);
  } catch (e) {
    console.error("Error handling the file:", e);
  }
}

handleFile();