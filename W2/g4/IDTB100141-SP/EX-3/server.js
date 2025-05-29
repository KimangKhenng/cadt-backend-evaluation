// server.js
const http = require('http');
const fs = require('node:fs');

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
        res.end(`
          <form method="POST" action="/contact">
            <input type="text" name="name" placeholder="Your name" />
            <button type="submit">Submit</button>
          </form>
        `);
        return;
    }

    if (url === '/contact' && method === 'POST') {
        // Implement form submission handling
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        });
        req.on('end', () => {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            const name = data.slice(5);
            fs.appendFileSync('submissions.txt', `${name}\n`);
            res.end(`Got your form ${name} !`);
        });
        return;
        
    }

    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('404 Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
