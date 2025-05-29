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
    }

    if (url === '/about' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end(`
            <html>
                <head><title>About</title></head>
                <body>
                    <h1>About Page</h1>
                    <p>This is the About page of the Node.js server.</p>
                </body>
            </html>
        `);
    }

    if (url === '/' && method !== 'GET') {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        return res.end('405 Method Not Allowed');
    }

    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        return res.end(`
            <html>
                <head><title>404 Not Found</title></head>
                <body>
                    <h1>404 Not Found</h1>
                    <p>The page you are looking for does not exist.</p>
                </body>
            </html>
        `);
    }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

process.on('SIGINT', () => {
    console.log('Shutting down server...');
    server.close(() => {
        console.log('Server closed.');
        process.exit(0);
    });
});
