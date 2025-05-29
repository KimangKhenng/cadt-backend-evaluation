import fsAsync from 'fs/promises';
const filePathAsync = './hello_async.txt';

/**
 * Asynchronously write and read a file.
 */
async function runAsyncIO() {
  // Write to file asynchronously
  await fsAsync.writeFile(filePathAsync, 'Hello, Node.js async beginner!');

  // Read file asynchronously
  const contentAsync = await fsAsync.readFile(filePathAsync, 'utf8');
  console.log('File content (async):', contentAsync);
}

runAsyncIO().catch(err => console.error('Async IO error:', err));
