import { promises as fs } from "fs";

const filePath = "./hello.txt";

async function handleFile() {
  try {

    await fs.writeFile(filePath, "Hello, Node.js beginner!");


    const content = await fs.readFile(filePath, "utf8");
    console.log("File content:", content);
  } catch (err) {
    console.error("Error handling file:", err);
  }
}

handleFile();


//when you run  nodemon ./Student.js
// answer: Nodemon automatically restarts your script whenever you save changes to Student.js.