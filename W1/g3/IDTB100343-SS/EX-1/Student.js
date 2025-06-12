import fs from 'fs/promises';

const filePath = "./hello.txt";

// Async write and read inside an async function
async function handleFile() {
  try {
    await fs.writeFile(filePath, "Hello from async Node.js!!!");
    const content = await fs.readFile(filePath, "utf8");
    console.log("File content:", content);
  } catch (err) {
    console.error("Error:", err);
  }
}

handleFile();
