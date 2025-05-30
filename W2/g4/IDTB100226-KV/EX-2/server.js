// server.js
const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    console.log(`Received ${method} request for ${url}`);

    if (url === '/' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html, charset=utf-8' });
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
    // Implement more routes here
    if (url === '/about' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end(`
            <html>
                <head><title>About</title></head>
                <body>
                    <h1>Welcome to the About Page</h1>
                    <p>About us: at CADT, we love node.js! </p>
                </body>
            </html>
        `);
    }
    if (url === '/contact-us' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        return res.end(`
            <html>
                <head><title>Contact Us</title></head>
                <body>
                    <h1>Welcome to the Contact us Page</h1>
                    <p>You can reach us vai email… </p>
                </body>
            </html>
        `);
    }
    if (url === '/products' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        return res.end(`
            <html>
                <head><title>Products</title></head>
                <body>
                    <h1>Welcome to the Products Page</h1>
                    <p>Buy one get one… </p>
                </body>
            </html>
        `);
    }
    if (url === '/projects' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        return res.end(`
            <html>
                <head><title>Projects</title></head>
                <body>
                    <h1>Welcome to the Projects Page</h1>
                    <p>Here are our awesome projects </p>
                </body>
            </html>
        `);
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('404 Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
