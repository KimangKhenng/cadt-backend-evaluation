import fs from 'fs';

const filePath = "/Users/nikachhun/Documents/Year 2/Term_3/Backend-Development/WEEK-01/start-code/EX-1/hello.txt";
// Write to a file (asynchronously)
fs.writeFile(filePath, "Hello, Node.js beginner!", (err) => {
    if (err) {
        console.log("Error writing file");
        return;
    }
    console.log("write to file successfully");
});

// Read the file (asynchronously)
fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
        console.log("Error reading file");
        return;
    }
    console.log("File content:", data);
});

console.log("End");
