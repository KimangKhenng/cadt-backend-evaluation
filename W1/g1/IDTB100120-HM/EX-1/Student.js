import fs from 'fs/promises';

const filePath = "./hello.txt";

async function main() {
  try {
    // Write to a file (asynchronously)
    await fs.writeFile(filePath, "Hello, Node.js beginner! (async)");

    // Read the file (asynchronously)
    const content = await fs.readFile(filePath, "utf8");
    console.log("File content:", content);
  } catch (err) {
    console.error("Error:", err);
  }
}

main();

