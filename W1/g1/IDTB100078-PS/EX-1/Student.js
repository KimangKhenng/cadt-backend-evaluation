import fs, { read, write } from 'fs';
// or
const filePath = "./hello.txt";
/* const filePath = "./hello.txt";
// Write to a file (synchronously)
fs.writeFileSync(filePath, "Hello, Node.js beginner!");
    // Read the file (synchronously)
    const content = fs.readFileSync(filePath, "utf8");
    console.log("File content:", content); */


async function writeAndRead(){
    return new Promise(() => {
        setTimeout(() => {
            fs.writeFile(filePath, "Hello, Node.js beginner!", (err) => {
                if (err) {
                    reject(err);
                } else {
                    const content = fs.readFileSync(filePath, "utf8");
                    console.log("File content:", content); 
                }
            });
        }
        , 1500);
    });
}

writeAndRead();



// Write to a file (asynchronously)
/* function writeFileAsync() {
    fs.writeFileSync(filePath, "Hi");
}
setTimeout(writeFileAsync, 1000); */
// Read the file (asynchronously)
/* function readFileAsync() {
    content = fs.readFileSync(filePath, "utf8");
    console.log("File content:", content);
}
setTimeout(readFileAsync, 1000); */


// write and read async

