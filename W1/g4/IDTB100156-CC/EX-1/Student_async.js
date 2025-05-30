import { promises as fs } from "fs";

const filePath = "./hello.txt";

async function main() {
  await fs.writeFile(filePath, "Hello, Node.js beginner!");
  const content = await fs.readFile(filePath, "utf8");
  console.log(content);
}

main();
