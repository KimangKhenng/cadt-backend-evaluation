const http = require('http');
const fs = require('fs');
const path = './EX-3/usrname.json';

function loadFromFile(filePath) {
  let listName = [];
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    listName = JSON.parse(data);
  } catch (err) {
    console.log('Load Data Error:', err.message);
  }
  return listName;
}
    
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  console.log(`Received ${method} request for ${url}`);

  if (url === '/' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end('Welcome to the Home Page');
  }

  if (url === '/contact' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    return res.end(`
      <form method="POST" action="/contact">
        <input type="text" name="name" placeholder="Your name" />
        <button type="submit">Submit</button>
      </form>
    `);
  }

  if (url === '/contact' && method === 'POST') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const formData = Object.fromEntries(new URLSearchParams(body));
      const name = formData.name?.trim();

      if (!name) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end(`
          <p>Name must not be empty</p>
          <form method="POST" action="/contact">
            <input type="text" name="name" placeholder="Your name" />
            <button type="submit">Submit</button>
          </form>
        `);
      }

      const listName = loadFromFile(path);
      listName.push({ name });

      fs.writeFile(path, JSON.stringify(listName, null, 2), err => {
        if (err) {
          console.error('Write Error:', err.message);
          res.writeHead(500, { 'Content-Type': 'text/html' });
          return res.end('<p>Error: Could not save your name.</p>');
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<p>Welcome, ${name}!</p>`);
      });
    });

    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('404 Not Found');
});

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
