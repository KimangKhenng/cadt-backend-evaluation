// const filePath = "./hello.txt";
// import fs from "fs";
// fs.writeFileSync(filePath, "Hello, Node.js beginner !");

// const content = fs.readFileSync(filePath, "utf-8");
// console.log("File content:", content);


import fs from "fs/promises";
const filePath = "./hello.txt";

async function ImplementFile() {
    try{
        await fs.writeFile(filePath, "Hello, Node.js beginner !");
        const content= await fs.readFile(filePath, "utf-8");
        console.log("File content:", content);
    }catch (error) {
        console.error("Error", error)
    }
}
ImplementFile();
