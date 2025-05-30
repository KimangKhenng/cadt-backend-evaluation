const filePath ="./hello.txt";
// Write to a file(synchronously)
fs.WriteFileSyn(filePath,"Hello! Node.js BEGGINNER!");

//Read the file(synchrously)
const content = fs.readFileSync(filePath, "utf8");
console.log("File content:",content);