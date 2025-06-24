import fs from "fs/promises"
const filePath = "./hello.txt";

// //write to a file (synchronously)
// fs.writeFileSync(filePath,"Hello, Node.js beginner!");

// //read the file (synchronously)
// const content = fs.readFileSync(filePath,"utf8");
// console.log("FIle content:",content);

try{
    await fs.writeFile(filePath,"Hello, Node.js beginner!");

    const content = await fs.readFile(filePath,"utf8");
    console.log("File content:" ,content);
}catch (err){
    console.error("Error");
}
