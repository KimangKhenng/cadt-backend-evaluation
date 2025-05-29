import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const filePath = "./hello.txt"; 


// // Write to a file (synchronously) 
// fs.writeFileSync(filePath, "Hello, Node.js beginner!"); 

// // Read the file (synchronously) 
// const content = fs.readFileSync(filePath, "utf8"); 
// console.log("File content:", content);

async function readFileAsync(filePath){
    try {
        const data = await fs.readFile(filePath,'utf8');
        console.log(data);
    } catch (error) {
        console.error('Error reading file:', error);
    }

}

async function writeFileAsync(filePath, content){
    try {
        await fs.writeFile(filePath, content, 'utf8' );
        console.log('File written successfully');
    } catch (error){
        console.error('Error writing file:', error);
    }
}

readFileAsync(filePath);
writeFileAsync(filePath,"Hello, Node.js beginner!");