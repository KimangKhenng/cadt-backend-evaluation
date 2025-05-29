const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    console.log(`Received ${method} request for ${url}`);

    // 'GET' METHOD
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
                res.end(`
                    <html>
                        <head><title>About</title></head>
                        <body>
                            <h1>Welcome to the About Page</h1>
                            <p>About us: at CADT, we love node.js!</p>
                        </body>
                    </html>
                `);
                break;

            case '/contact-us':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(`
                    <html>
                        <head><title>Contact</title></head>
                        <body>
                            <h1>Welcome to the Contact-Us Page</h1>
                            <p>You can reach us via email.</p>
                        </body>
                    </html>
                `);
                break;

            case '/products':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(`
                    <html>
                        <head><title>Products</title></head>
                        <body>
                            <h1>Welcome to the Products Page</h1>
                            <p>Buy one get one</p>
                        </body>
                    </html>
                `);
                break;

            case '/projects':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(`
                    <html>
                        <head><title>Projects</title></head>
                        <body>
                            <h1>Welcome to the Projects Page</h1>
                            <p>Here are our awesome projects</p>
                        </body>
                    </html>
                `);
                break;

            default:
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 Not Found');
        }
    } else {
        // HANDLE UNSUPPORTED METHOD.
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('405 Method Not Allowed');
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
