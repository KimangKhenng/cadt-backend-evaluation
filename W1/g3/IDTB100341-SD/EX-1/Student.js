import fs from 'fs';
const filePath = "./hello.txt";
fs.writeFile(filePath, "Hello, Node.js beginner!", (err) => {
    if (err) {
      console.error("Error writing to file:", err);
      return;
    }

    fs.readFile(filePath, "utf8", (err, content) => {
      if (err) {
        console.error("Error reading the file:", err);
        return;
      }
      console.log("File content:", content);
    });
  });