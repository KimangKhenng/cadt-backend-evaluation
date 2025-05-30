/** @format */
import fs from "fs";
const filePath = "./hi.txt";

// Write to a file (asynchronously)
fs.writeFile(filePath, "Hi, Node.js beginner!", (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }

  // Read the file (asynchronously) after writing
  fs.readFile(filePath, "utf8", (err, content) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }

    console.log("File content:", content);
  });
});
