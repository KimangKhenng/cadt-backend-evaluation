import {writeFile,readFile} from "fs/promises";
// Importing the writeFile and readFile functions from the fs/promises module
// import fs from "fs";
// Importing the fs module to work with the file system
const filePath = "./hello.txt";

// convert the read and write into async version 
async function createFile() {
    try {
        await writeFile(filePath,"Hello, Node.js  beginner!");
        const content = await readFile(filePath,'utf-8');
        console.log("File content :",content);
    }catch(err) {
        console.error("Error creating file:", err);
    }
}
createFile();


//whatever we change after running nodemon it will automatically update the file;