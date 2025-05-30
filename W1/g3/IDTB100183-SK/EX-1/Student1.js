import fs from "fs/promises";
const filePath = "./hello1.txt";
//write to the file 
async function writeAndReadFile(){
    try{
        await fs.writeFile(filePath,"Hello, Node.js beginner!");

        const content = await fs.readFile(filePath,"utf-8");
        console.log("File content:",content);
    }
    catch(err){
        console.error("Error:", err);
    }
}
writeAndReadFile();
