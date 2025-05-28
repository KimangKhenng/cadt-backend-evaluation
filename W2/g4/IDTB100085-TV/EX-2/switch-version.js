// server.js
const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    console.log(`Received ${method} request for ${url}`);

    switch (true) {
        case method === 'GET' && url === '/':
            res.writeHead(200, {'Content-Type': 'text/html'});
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
            res.writeHead(200, {'Content-Type': 'text/plain'});
            return res.end(
                `This is about page.\n` +
                `About us: At CADT, we love node.js.`
            );

        case method === 'GET' && url === '/contact-us':
            res.writeHead(200, {'Content-Type': 'text/html'});
            return res.end(`
                <html>
                    <head><title>Contact us</title></head>
                    <body>
                        <h1>Welcome to the Contact Page</h1>
                        <p>You can reach us via email: fake@example.com</p>
                    </body>
                </html>
            `);

        case method === 'GET' && url === '/products':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            return res.end(
                `This is our products.\n` +
                `Buy 5 get one for free.`
            );

        case method === 'GET' && url === '/project':
            res.writeHead(200, {'Content-Type': 'text/html'});
            return res.end(`
                <html>
                    <head><title>Project</title></head>
                    <body>
                        <h1>Welcome to the Project Page</h1>
                        <p>Here are our awesome projects.</p>
                    </body>
                </html>
            `);

        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            return res.end('404 NOT FOUND');
    }

});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
