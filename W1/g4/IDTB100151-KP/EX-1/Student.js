const filepath = "./student.txt";

fs.writeFileSync(filepath, "Hello, Node.js beginer!");

const content = fs.readFileSync(filepath, "utf-8");
console.log("File content: ",content);