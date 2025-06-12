// import fs from 'fs'
// const filePath = "./hello.txt";
// // Write to a file (synchronously)
// fs.writeFileSync(filePath, "Hello, Node.js beginner!");
// // Read the file (synchronously)
// const content = fs.readFileSync(filePath, "utf8");
// console.log("File content:", content);

import fs from 'fs';

const filePath = './hello.txt';

const writeToFile = new Promise((resolve, reject) => {
  fs.writeFile(filePath, 'Hello, Node.js beginner!', (err) => {
    if (err) {
      reject('Error:', err);
    } else {
      resolve('success');
    }
  });
});

const readFromFile = new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject('Error', err);
    } else {
      resolve(data);
    }
  });
});

writeToFile.then(() => readFromFile).then((content) => {
    console.log('File content:', content);
  })
  .catch((err) => {
    console.error(err);
  });
