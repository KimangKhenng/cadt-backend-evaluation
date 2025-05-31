// server.js
const http = require('http');

const server = http.createServer((req, res) => {
    try{
        const { method, url } = req;
    
        console.log(`Received ${method} request for ${url}`);

        res.setHeader('content-type', 'text/plain');
    
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
        else if (url === '/about' && method === 'GET') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            return res.end(`
                <html>
                    <head><title>About</title></head>
                    <body>
                        <h1>About Us</h1>
                        <p>About us: at CADT, we love node.js</p>
                    </body>
                </html>
            `);
        }
        else if (url === '/contact-us' && method === 'GET') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            return res.end(`
                <html>
                    <head><title>Contact</title></head>
                    <body>
                        <h1>Contact Us</h1>
                        <p>You can reach us vai email....</p>
                    </body>
                </html>
            `);
        }
        else if (url === '/products' && method === 'GET') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            return res.end(`
                <html>
                    <head><title>Products</title></head>
                    <body>
                        <h1>Our Products</h1>
                        <p>Buy one Get one</p>
                    </body>
                </html>
            `);
        }
        else if (url === '/projects' && method === 'GET') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            return res.end(`
                <html>
                    <head><title>Projects</title></head>
                    <body>
                        <h1>Our Projects</h1>
                        <p>Here are awesome project</p>
                    </body>
                </html>
            `);
        }
        // Implement more routes here
        else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            return res.end('404 Not Found');
        }
    }catch (error) {
        console.error('Error handling request:', error);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Internal Server Error');
    }
});
    

server.listen(4000, () => {
    console.log('Server is running at http://localhost:4000');
});
