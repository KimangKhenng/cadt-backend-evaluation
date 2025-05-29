import fs from 'fs';

// const filePath = "./hello.txt";
// // Write to a file (synchronously)
// fs.writeFileSync(filePath, "Hello, Node.js beginner!");
// // Read the file (synchronously)
// const content = fs.readFileSync(filePath, "utf8");
// console.log("File content:", content);

const filePath = "./hello.txt";
// Write to a file (asynchronously)

fs.writeFile(filePath, "Hello, Node.js beginner!", (err) => {
    if (err) {
        console.error("Error writing file:", err);
        return;

    }
    console.log("File written successfully!");

    // Read the file (asynchronously)
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        console.log("File content:", data);
    });
});