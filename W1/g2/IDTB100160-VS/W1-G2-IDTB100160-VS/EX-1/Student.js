const fs = require('fs');
const path = require('path');

const filePath = "./hello.txt";
// Write to a file (synchronously)

try {
    fs.writeFileSync(filePath, "Hello, Node.js beginner!");
    console.log("File written successfully.");
} catch (err) {
    console.error("Error writing file:", err);
}

// Read the file (synchronously)
try {
    const content = fs.readFileSync(filePath, "utf8");
    console.log("File content:", content);
} catch (err) {
    console.error("Error reading file:", err);
}