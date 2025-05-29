import { promises as fs } from "fs";

const filePath = "./hi.txt";

async function main(){

    try{
        await fs.writeFile(filePath , "Hello, Node.js beginner!");

        const content = await fs.readFile(filePath, "utf8");
        console.log("File content: " ,content);
    }catch(error){
        console.error("Error: " ,error);
    }

}

main();