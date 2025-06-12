const filePath = "./hello.txt";
import fs from 'fs'


async function main(){

// Write to a file (synchronously)
    try{
    await fs.writeFileSync(filePath, "Hello, Node.js beginner!");
    
    // Read the file (synchronously)
    const content = fs.readFileSync(filePath, "utf8");
    console.log("File content:", content);
    }catch(error){
        console.log(error);
    }
    
}

main();