// server.js
 /* const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    console.log(`Received ${method} request for ${url}`);
    Task 1: using else if statements
    if (url === '/about' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end(`
            <html>
                <head><title>About us</title></head>
                <body>
                    <h1>Welcome to the about us Page</h1>
                    <p>About us: at CADT, we love node.js!</p>
                </body>
            </html>
        `);
    }
    
    // Implement more routes here

    else if (url === '/contact-us' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end(`
            <html>
                <head><title>Contact us</title></head>
                <body>
                    <h1>Welcome to the Contact us Page</h1>
                    <p>You can r4each us via email...</p>
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
                    <h1>Welcome to the products Page</h1>
                    <p>Buy one get one...</p>
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
                    <h1>Welcome to the Projects Page</h1>
                    <p>Here are our awesome projects</p>
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


*/

// Task 2: using switch statement
    
const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    
    console.log(`Received ${method} request for ${url}`);
    
    if (method === 'GET') {
        switch (url) {
            case '/about':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                return res.end(`
                    <html>
                        <head><title>About</title></head>
                        <body>
                            <h1>About Us</h1>
                            <p>This is the about page.</p>
                        </body>
                    </html>
                `);
            case '/contact-us':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                return res.end(`
                    <html>
                        <head><title>Contact</title></head>
                        <body>
                            <h1>Contact Us</h1>
                            <p>This is the contact page.</p>
                        </body>
                    </html>
                `);
            case '/products':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                return res.end(`
                    <html>
                        <head><title>Products</title></head>
                        <body>
                            <h1>Our Products</h1>
                            <p>This is the products page.</p>
                        </body>
                    </html>
                `);
            case '/projects':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                return res.end(`
                    <html>
                        <head><title>Projects</title></head>
                        <body>
                            <h1>Our Projects</h1>
                            <p>This is the projects page.</p>
                        </body>
                    </html>
                `);
            default:
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                return res.end('404 Not Found');
            }
        } else {
            res.writeHead(405, { 'Content-Type': 'text/plain' });
            return res.end('405 Method Not Allowed');
    }
});
    
    server.listen(3000, () => {
        console.log('Server is running at http://localhost:3000');
    });