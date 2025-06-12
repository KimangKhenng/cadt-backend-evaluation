import fs from 'fs/promises';
const filepath = "hello.txt";

// //write to the file (synchronous)
// fs.writeFileSync(filepath, "hello world node.js beginner!"); 

// //read the file (synchronous)
// const content = fs.readFileSync(filepath, "utf-8");
// console.log("content in file", content);


// Convert the read and write into async versions
async function writeAndReadFile() {
    try {
        // Write to the file (asynchronous)
        await fs.writeFile(filepath, "hello world node.js beginner!");
        
        // Read the file (asynchronous)
        const content = await fs.readFile(filepath, "utf-8");
        console.log("content in file", content);
    } catch (err) {
        console.error("Error occurred:", err);
    }
}


writeAndReadFile();