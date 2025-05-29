import { writeFile, readFile } from 'fs/promises';

const filePath = "./hello.txt";

async function handleFile() {
  try {
    // Write the content to a file (non-blocking)
    await writeFile(filePath, "Hello, Node.js beginner!");

    // Read the content back from the file (non-blocking)
    const content = await readFile(filePath, "utf8");

    // Log the content
    console.log("File content:", content);
  } catch (err) {
    // Handle any error (e.g., file not found, permission error)
    console.error("Error:", err);
  }
}

handleFile();
