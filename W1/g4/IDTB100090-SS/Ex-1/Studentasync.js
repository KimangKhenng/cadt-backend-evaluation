// Import the fs module with promises support
import { promises as fs } from 'fs';

const filePath = "./hello.txt";

// Define an async function to handle file operations
async function run() {
  try {
    // Write to the file asynchronously
    await fs.writeFile(filePath, "Hello, Node.js beginner1!");

    // Read from the file asynchronously
    const content = await fs.readFile(filePath, "utf8");

    // Display the content
    console.log("File content:", content);
  } catch (err) {
    console.error("Error:", err);
  }
}

// Call the async function
run();
