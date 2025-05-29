import fs from "fs/promises";
const filePath = "./hello.txt"; 


// ===== read and write file as sync =====

async function handleFileOperations() {
    // Write to a file (synchronously) 
    await fs.writeFile(filePath, "Hello, Node.js beginner!"); 
    // Read the file (synchronously) 
    const content = await fs.readFile(filePath, "utf8"); 
    console.log("File content:", content); 
}

handleFileOperations();