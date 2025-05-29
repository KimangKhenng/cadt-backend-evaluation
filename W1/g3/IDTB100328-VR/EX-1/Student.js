import { promises as fs } from 'fs'

const filePath = "./hello.txt";

// ASYNC VERSION

async function main() {
    try {
        await fs.writeFile(filePath, 'Hello, Node.js beginner!');

        const content = await fs.readFile(filePath, 'utf8');
        console.log('File content:', content);
    } catch (error) {
        console.error('Error handling file:', error);
    }
}

main();

/*
*   SYNC VERSION
*
// Write to a file (synchronously)
fs.writeFileSync(filePath, "Hello, Node.js beginner!");
// Read the file (synchronously)
const content = fs.readFileSync(filePath, "utf8");
console.log("File content:", content);
*
*
*/