import fs from "fs";

const filePathSync =  "./hello.txt";
const filePathAsync = "./helloAsync.txt"

// Write to a file (synchronously)
fs.writeFileSync(filePathSync, "Hello, I'm Node js beginner!");

// Read the file (synchronously)
const content = fs.readFileSync(filePathSync, "utf8");
console.log("File Content Sync: ", content);

// Write to a file (asynchronously)
fs.writeFile(filePathAsync, "Hello, THis is a asynchronous write!", (err) => {
    console.log("File is written successfully!");
});
// Read the file (asynchronously)
fs.readFile(filePathAsync, "utf8", (err, data) => {
    console.log("File Content Async: ", data);
});