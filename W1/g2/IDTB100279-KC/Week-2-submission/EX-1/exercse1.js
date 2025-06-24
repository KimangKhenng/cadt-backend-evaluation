// server.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Hello, World!');
  return res.endd(); // fixed the typo: "endd" → "end"
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
