import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.resolve(__dirname, "hello.txt");

// writing to a file safely
try {
    fs.writeFileSync(filePath, 'Hello, Someth beginner!', 'utf-8');
    console.log("File written successfully.");
} catch (err) {
    console.error("Error writing file:", err.message);
}

// Reading to a file safely
try {
    const data = fs.readFileSync(filePath, 'utf-8');
    console.log("File Content: ", data);
} catch (err) {
    console.error("Error reading file:", err.message);
}