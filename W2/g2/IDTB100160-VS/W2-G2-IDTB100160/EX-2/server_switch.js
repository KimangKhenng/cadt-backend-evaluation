const http = require('http');

const server = http.createServer((req, res) => {
    const route = `${req.method} ${req.url}`;

    console.log(`Recieved ${route} request`);

    switch (route) {
        case 'GET /':
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
        case 'GET /about':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            return res.end(`
                <html>
                    <head><title>About</title></head>
                    <body>
                        <h1>About Us</h1>
                        <p>
                            About us: at CADT, we love node.js! 
                        </p>
                    </body>
                </html>
            `);
        case 'GET /contact':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            return res.end(`
                <html>
                    <head><title>Contact</title></head>
                    <body>
                        <h1>Contact Us</h1>
                        <p>
                            You can reach us via email…
                        </p>
                    </body>
                </html>
            `);
        case 'GET /products':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            return res.end(`
                <html>
                    <head><title>Products</title></head>
                    <body>
                        <h1>Our Products</h1>
                        <p>
                            Buy one get one… 
                        </p>
                    </body>
                </html>
            `);
        case 'GET /projects':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            return res.end(`
                <html>
                    <head><title>Projects</title></head>
                    <body>
                        <h1>Our Projects</h1>
                        <p>
                            Here are our awesome projects 
                        </p>
                    </body>
                </html>
            `);
        default:
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end(`
                <html>
                    <head><title>404 Not Found</title></head>
                    <body>
                        <h1>404 Not Found</h1>
                        <p>The requested page was not found.</p>
                    </body>
                </html>
            `);
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
})