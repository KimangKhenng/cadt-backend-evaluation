import fs from "fs";
const filePath ="./hello.txt";
//write to file asynchronous
fs.writeFileSync(filePath, "Hello, Node.js! beginner!");
//read from file asynchronous
const content = fs.readFileSync(filePath, "utf-8");
console.log("File content:", content);

//questoin 5
import fs from "fs/promises";
const filePath2 = "./hello2.txt";
async function handleFile() {
  try {
    await fs.writeFile(filePath2, "Hello, Node.js! beginner!");
    const content = await fs.readFile(filePath2, "utf-8");
    console.log("File content:", content);
    }
    catch (error) {
      console.error("Error:", error);
    }
}
handleFile();
