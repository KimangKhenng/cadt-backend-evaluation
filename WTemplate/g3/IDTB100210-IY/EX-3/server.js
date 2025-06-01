// server.js
const http = require('http');

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
        // can't subbmit if no input
        if (!req.headers['content-type'] || !req.headers['content-type'].includes('application/x-www-form-urlencoded')) {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            return res.end('Bad Request: Content-Type must be application/x-www-form-urlencoded');
        }
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); // Convert Buffer to string
        });
        req.on('end', () => {
            const name = new URLSearchParams(body).get('name');
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            return res.end(`Thank you for your submission, ${name}`);
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
