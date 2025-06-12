// Import necessary modules
import fs from 'fs/promises'; // Use the promise-based fs module
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define file path
const filePath = path.join(__dirname, 'hello.txt');

// Async function to write and read the file
async function run() {
  try {
    // Write to the file asynchronously
    await fs.writeFile(filePath, "Hello, Node.js beginner!");

    // Read from the file asynchronously
    const content = await fs.readFile(filePath, "utf8");

    // Display the content
    console.log("File content:", content);
  } catch (err) {
    console.error("Error:", err);
  }
}

// Execute the async function
run();