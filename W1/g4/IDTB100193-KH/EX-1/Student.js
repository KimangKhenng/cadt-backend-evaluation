import { writeFileSync, readFileSync } from "fs";
import {main} from "./asyncStudent.js";

const filePath = "./hello.txt";

writeFileSync(filePath, "Hello world");

const content = readFileSync(filePath, "utf-8");
main().then(
    () => console.log("File content:", content)
).catch(
    (err) => console.error("Error writing to file:", err)
)