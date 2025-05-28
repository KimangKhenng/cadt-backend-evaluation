import { writeFile, readFile } from 'fs/promises';
const filepath = './hello.txt';

await writeFile(filepath, "Hello world")
const content = await readFile(filepath, 'utf8');
console.log("File content: ",content);

/*
* what happens when the code is change and save when run with nodemon?
* It automatically updates, no need to run the script anymore.
* */