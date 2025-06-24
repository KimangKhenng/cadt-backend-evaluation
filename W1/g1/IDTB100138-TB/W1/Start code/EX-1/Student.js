import fs from 'fs';
const filePath = "./hello.txt";
// Write to a file (synchronously)

async function main() {
    
}{
    fs.writeFileSync(filePath, "Hello, Node.js beginner!");
    // Read the file (synchronously)
    const content = fs.readFileSync(filePath, "utf8");
    console.log("File content:", content);
}

main();