// server.js
const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    console.log(`Received ${method} request for ${url}`);

    switch (url) {
        case '/':
            if (method === 'GET') {
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
            }
            break;

        case '/about':
            if (method === 'GET') {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                return res.end('About us: at CADT, we love node.js!');
            }
            break;

        case '/contact-us':
            if (method === 'GET') {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                return res.end('You can reach us via email...');
            }
            break;

        case '/products':
            if (method === 'GET') {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                return res.end('Buy one get one...');
            }
            break;

        case '/projects':
            if (method === 'GET') {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                return res.end('Here are our awesome projects');
            }
            break;

        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            return res.end('404 Not Found');
    }

    // If method doesn't match (e.g., POST instead of GET), return 405 Method Not Allowed
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    return res.end('405 Method Not Allowed');
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});