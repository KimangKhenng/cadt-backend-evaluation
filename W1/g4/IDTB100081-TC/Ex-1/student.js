const fs = require("fs");
const path = require("path");

const filePathAsync = path.resolve(__dirname, "helloAsync.txt");
const filePathSync = path.resolve(__dirname, "hello.txt");

// Write to a file (synchronously)
try{
    fs.writeFileSync(filePathSync, "Hello, I'm Node js beginner!");
    console.log("File is written successfully!");
}
catch (err) {
    console.error("Error writing file:", err);
}

// Read the file (synchronously)
try{
    const content = fs.readFileSync(filePathSync, "utf8");
    console.log("File Content Sync: ", content);
}
catch (err) {
    console.error("Error reading file:", err);
}

// Write to a file (asynchronously)
fs.writeFile(filePathAsync, "Hello, THis is a asynchronous write!", (err) => {
    console.log("File is written successfully!");
});
// Read the file (asynchronously)
fs.readFile(filePathAsync, "utf8", (err, data) => {
    console.log("File Content Async: ", data);
});