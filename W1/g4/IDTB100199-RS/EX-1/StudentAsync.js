import fs from 'fs/promises';
const filePath = './hello-async.txt';

async function demo() {
    try {
        await fs.writeFile(filePath, 'Hello, async Node.js!');
        const data = await fs.readFile(filePath, 'utf8');
        console.log('Async file content:', data);
    } catch (err) {
        console.error('Error:', err);
    }
}

demo();