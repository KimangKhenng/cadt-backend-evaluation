// server.js
const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    console.log(`Received ${method} request for ${url}`);

    if (method === 'GET') {
        switch (url) {
            case '/':
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
            case '/about':
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                return res.end('About us: at CADT, we love node.js!');
            case '/contact-us':
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                return res.end('You can reach us via email at contact@cadt.com.');
            case '/products':
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                return res.end('Buy one, get one free on all our products!');
            case '/projects':
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                return res.end('Here are our awesome projects: Project A, Project B, Project C.');
            default:
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                return res.end('404 Not Found');
        }
    } else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        return res.end('405 Method Not Allowed');
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
