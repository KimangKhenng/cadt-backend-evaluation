import { writeFile, readFile } from 'fs/promises';

const filePath = './hello.txt';

export async function main() {
    try{
        await writeFile(filePath, "Hello Node.js");
        const content = await readFile(filePath, 'utf-8');
        console.log("File content:", content);
    }catch (err){
        console.error("Error writing to file:", err);
    }
}

