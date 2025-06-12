import fs from 'fs/promises'; 

async function main() {
  const filePath = "./hello.txt";
  await fs.writeFile(filePath, "Hello, Node.js beginner!", "utf8");
  const content = await fs.readFile(filePath, "utf8");
  console.log("File content:", content);
}

main().catch(err => console.error("Error:", err));