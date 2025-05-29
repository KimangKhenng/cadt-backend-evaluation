import fs from "fs";

const filePath = "./hello.txt";
// Write to a file (synchronously)
try {
  const write = async () =>
    fs.writeFileSync(filePath, "Hello, Node js beginner 2!");
  await write();
  console.log("File written successfully.");
} catch (err) {
  console.error("❌ Error writing file:", err.message);
}

try {
  const read = async () => fs.readFileSync(filePath, "utf8");
  const content = await read();
  console.log("File content:", content);
} catch (err) {
  console.error("❌ Error reading file:", err.message);
}

//I Read the file (synchronously)
