import fs from "fs";
const filePath = "./hello.txt";
// Write to a file (synchronously) [Converted to Asynchronous]
fs.writeFile(filePath, "Hello, Node.js beginner!", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Write to file successfully");
  }
});
// Read the file (synchronously) [Converted to Asynchronous]

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log("File read successfully");
    console.log("File content:", data);
  }
});
