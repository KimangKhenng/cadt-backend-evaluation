// server.js
const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    console.log(`Received ${method} request for ${url}`);

    if(method === 'GET') {
        switch(url) {
            
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
                res.writeHead(200, { 'Content-Type': 'text/html' });
                return res.end(`
                    <html>
                        <head><title>About</title></head>
                        <body>
                            <p>About us: at CADT, we love node.js!</p>
                        </body>
                    </html>
                `);

            case '/contact-us':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                return res.end(`
                    <html>
                        <head><title>Contact-Us</title></head>
                        <body>
                            <p>You can reach us via email...</p>
                        </body>
                    </html>
                `);

            case '/products':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                return res.end(`
                    <html>
                        <head><title>Products</title></head>
                        <body>
                            <p>Buy one get one...</p>
                        </body>
                    </html>
                `);

            case '/projects':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                return res.end(`
                    <html>
                        <head><title>Projects</title></head>
                        <body>
                            <p>Here are our awesome projects</p>
                        </body>
                    </html>
                `);

            default:
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                return res.end('404 Not Found');
        }
    }

   
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
