// server.js
const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    console.log(`Received ${method} request for ${url}`);

    if (url === '/' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end(`
            <html>
                <head><title>Home</title></head>
                <body>
                    <h1>Welcome to the Home Page</h1>
                    <p>This is a simple Node.js server.</p>
                </body>
            </html>
        `);
    }// Implement more routes here
    else if (url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        return res.end('About us: at CADT, we love node.js!');
    } else if (url === '/contact-us') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        return res.end('You can reach us via email at support@example.com.');
    } else if (url === '/products') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        return res.end('Buy one get one free!');
    } else if (url === '/projects') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        return res.end('Here are our awesome projects.');
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('404 Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
