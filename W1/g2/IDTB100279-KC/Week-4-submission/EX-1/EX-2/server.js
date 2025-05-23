// server.js
/* import http from 'http';

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    console.log(`Received ${method} request for ${url}`); */

    /* if (url === '/' && method === 'GET') {
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
    else if(url === '/about' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end(`
            <html>
                <head><title>About</title></head>
                <body>
                    <h1>About us: at CADT, we love node.js!</h1>
                </body>
            </html>
        `);
    }
    else if(url === '/contact_us' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end(`
            <html>
                <head><title>Contact-us</title></head>
                <body>
                    <h1>You can reach us vai email...</h1>
                </body>
            </html>
        `);
    }
    else if(url === '/products' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end(`
            <html>
                <head><title>Product</title></head>
                <body>
                    <h1>Buy one get one...</h1>
                </body>
            </html>
        `);
    }
    else if(url === '/projects' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end(`
            <html>
                <head><title>Project</title></head>
                <body>
                    <h1>Here are your awesome projects</h1>
                </body>
            </html>
        `);
    }
    // Implement more routes here
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('404 Not Found');
    } */
/*         const route = `${method} ${url}`;

        switch (route) {
            case 'GET /':
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
        
            case 'GET /about':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(`
                    <html>
                        <head><title>About</title></head>
                        <body>
                            <h1>About us: at CADT, we love node.js!</h1>
                        </body>
                    </html>
                `);
                break;
        
            case 'GET /contact_us':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(`
                    <html>
                        <head><title>Contact-us</title></head>
                        <body>
                            <h1>You can reach us via email...</h1>
                        </body>
                    </html>
                `);
                break;
        
            case 'GET /products':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(`
                    <html>
                        <head><title>Product</title></head>
                        <body>
                            <h1>Buy one get one...</h1>
                        </body>
                    </html>
                `);
                break;
        
            case 'GET /projects':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(`
                    <html>
                        <head><title>Project</title></head>
                        <body>
                            <h1>Here are your awesome projects</h1>
                        </body>
                    </html>
                `);
                break;
        
            default:
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 Not Found');
        } 
        
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
 */

import express from 'express';

const app = express();

// Home Page
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send(`
        <html>
            <head><title>Home</title></head>
            <body>
                <h1>Welcome to the Home Page</h1>
                <p>This is a simple Node.js server.</p>
            </body>
        </html>
    `);
});

// About Page
app.get('/about', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send(`
        <html>
            <head><title>About</title></head>
            <body>
                <h1>About us: at CADT, we love Node.js!</h1>
            </body>
        </html>
    `);
});

// Contact Us Page
app.get('/contact_us', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send(`
        <html>
            <head><title>Contact Us</title></head>
            <body>
                <h1>You can reach us via email...</h1>
            </body>
        </html>
    `);
});

// Products Page
app.get('/products', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send(`
        <html>
            <head><title>Products</title></head>
            <body>
                <h1>Buy one, get one...</h1>
            </body>
        </html>
    `);
});

// Projects Page
app.get('/projects', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send(`
        <html>
            <head><title>Projects</title></head>
            <body>
                <h1>Here are your awesome projects</h1>
            </body>
        </html>
    `);
});

// 404 Not Found
app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

// Server Start
app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});

