const http = require('http');

const server = http.createServer((req, res) => {
    const { url, method } = req;

    switch (true) {
        case method === 'GET' && url === '/':
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

        case method === 'GET' && url === '/about':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            return res.end('About is : at cadt, we love nodee.js!');

        case method === 'GET' && url === '/contact-us':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            return res.end('You can reach us via email...');

        case method === 'GET' && url === '/products':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            return res.end('Buy one get one....');

        case method === 'GET' && url === '/projects':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            return res.end('Here are our awesome projects');

        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            return res.end('404 Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
