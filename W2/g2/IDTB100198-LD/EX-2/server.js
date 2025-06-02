// server.js
const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    console.log(`Received ${method} request for ${url}`);

if (method === 'GET') {
    switch (req.url) {
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
                            <p>About us: At CADT, We love node.js.</p>
                        </body>
                    </html>
                `);
                break;

            case '/contact-us':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`
                    <html>
                        <head><title>Contact us</title></head>
                        <body>
                            <h1>Welcome to the Contact us Page</h1>
                            <p>You can reach us vai email...</p>
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
                            <p>Buy one get one...</p>
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
                res.writeHead(404, { 'Content-Type': 'text/html'});
                res.end('404 Not Found');
                break;
    }
}

// Implement more routes here
else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    return res.end('Method Not Allowed');
}
});

server.listen(3033, () => {
    console.log('Server is running at http://localhost:3033');
});
