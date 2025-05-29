import fs from "fs/promises";
const filePath = "./hello.txt";

async function handleFileOperation(){
    try {
        //Write to a file
        await fs.writeFile(filePath,"Hello World!");

        //Read from a file
        const content =await fs.readFile(filePath, "utf8");
        console.log("File content:",content);
    } catch (error) {
        console.error("Error handling file operations:",error);
    }
}

//call async function
handleFileOperation();