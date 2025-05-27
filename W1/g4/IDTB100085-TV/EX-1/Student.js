// Import fs for fileSystem
const fs = require('fs');
const path = require('path');

// use path.resolve to make the path absolute
const filePath = path.resolve(__dirname, "hello.txt");

// Write to file (synchronously)
try{
    fs.writeFileSync(filePath, 'Hello, Node.js beginner!', 'utf-8');
    console.log('File written successfully!');
}
catch (err){
    console.error('Error writing file', err.message);
}

// Read from file (synchronously)
try{
    const content = fs.readFileSync(filePath, 'utf-8');
    console.log('File content: ', content);
}
catch (err){
    console.error('Error reading file', err.message);
}