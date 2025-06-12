import { writeFile, readFile } from 'fs/promises';

const filePath = './hello.txt';

async function handleFile() {
  try {
    // Write to the file (asynchronously)
    await writeFile(filePath, 'Hello, Node.js beginner (async)!');

    // Read the file (asynchronously)
    const content = await readFile(filePath, 'utf8');
    console.log('File content:', content);
  } catch (err) {
    console.error('Error:', err);
  }
}

handleFile();
