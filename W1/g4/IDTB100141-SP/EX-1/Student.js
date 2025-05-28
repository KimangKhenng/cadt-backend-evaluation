import * as fs from "node:fs";
import { setInterval } from "node:timers/promises";
const filePath = "./hello.txt";
fs.writeFileSync(filePath, "Hello, Node.js beginner.");
const content = fs.readFileSync(filePath, "utf-8");
console.log("File content (synchronous): ", content);
setTimeout( () => {console.log("File content (asynchronous):", content)}, 3000);

