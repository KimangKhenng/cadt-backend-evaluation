import fs from 'fs';
const filePath = "./hello.txt";

fs.writeFileSync(filePath, "Hello, Node.js beginner!");

const content = fs.readFileSync(filePath, "utf8");
console.log("File Content:", content);


// asynchronous versions
fs.writeFile(filePath, "Hello, Node.js beginner!", (err) =>{
    if(err){
       console.error("Error writing file: ", err);
       return;
    }
})

fs.readFile(filePath, "utf8", (err) =>{
    if(err){
        console.error("Error reading from file: ", err);
        return;
    }

    console.log("File Content:", content);
})