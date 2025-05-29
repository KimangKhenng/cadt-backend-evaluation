// server_switch.js
const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    console.log(`Received ${method} request for ${url}`);

    if (method === 'GET') {
        switch (url) {
            case '/':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(`
                    <html>
                        <head><title>Home</title></head>
                        <body>
                            <h1>Welcome to the Home Page</h1>
                            <p>This is a simple Node.js server.</p>
                        </body>
                    </html>
                `);
                break;

            case '/about':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end("About us: At CADT, we love Node.js!");
                break;

            case '/contact-us':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end("You can reach us via email...");
                break;

            case '/products':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end("Buy one get one...");
                break;

            case '/projects':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end("Here are our awesome projects");
                break;

            default:
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 Not Found');
                break;
        }
    } else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('405 Method Not Allowed');
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
