import fs from 'fs/promises'; // Use fs/promises for async methods

async function main() {
    const filePath = "./hello.txt";
    try {
        // Write to a file (asynchronously)
        await fs.writeFile(filePath, "Hello, Node.js beginner!");
        // Read the file (asynchronously)
        const content = await fs.readFile(filePath, "utf8");
        console.log("File content:", content);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

main();