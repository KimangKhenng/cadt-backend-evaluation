import { promises as fs } from "fs";

const filePath = "./hello.txt";

async function run() {
  try {
    // Write to file asynchronously
    await fs.writeFile(filePath, "Hello, Node.js beginner!");

    // Read the file asynchronously
    const content = await fs.readFile(filePath, "utf8");

    // out put the content
    console.log("File content:", content);
  } catch (error) {
    console.error("Error:", error);
  }
}

run();