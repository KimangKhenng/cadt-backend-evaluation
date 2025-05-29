import fs from 'fs';
const filePath = './hello.txt';

// Write to a file synchronously
fs.writeFileSync(filePath, 'Hello, Node.js beginner!');

// Read the file synchronously
const contentSync = fs.readFileSync(filePath, 'utf8');
console.log('File content (sync):', contentSync);