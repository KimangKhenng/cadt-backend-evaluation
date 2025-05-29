import fs from 'fs/promises';

const filePath = "./hello.txt";

async function handleFile() {
  await fs.writeFile(filePath, "Hello, Node.js beginner!");

  const content = await fs.readFile(filePath, "utf8");
  console.log("File content:", content);
}

handleFile().catch(err => console.error("Error:", err));
