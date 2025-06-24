import fs from "fs";
const filePath = "./hello.txt";

// Write (async)
fs.writeFile(filePath, "Hello Rachna! How are you", "utf8", (err) => {
  if (err) throw err;
  console.log("File written!");

  // Read (async)
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) throw err;
    console.log("File content:", data);
  });
});
