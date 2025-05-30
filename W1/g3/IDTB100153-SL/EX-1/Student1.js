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
