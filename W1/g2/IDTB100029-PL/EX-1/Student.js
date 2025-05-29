import {promises as fs} from 'fs';

const filePath = './hello.txt';

async function run() {
    try{
        await fs.writeFile(filePath,"hello, Node.js beginner!");
        const content = await fs.readFile(filePath, 'utf8');
        console.log('File content :', content);
    }
    catch (error){
        console.log('Error:',error)
    }
}

run();