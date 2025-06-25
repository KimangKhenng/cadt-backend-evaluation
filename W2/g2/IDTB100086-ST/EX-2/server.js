// server.js
const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    console.log(`Received ${method} request for ${url}`);

    // Using switch statement for better organization
    switch(url) {
        case '/':
            if (method === 'GET') {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                return res.end('Welcome to the Home Page');
            }
            break;
        case '/about':
            if (method === 'GET') {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                return res.end('About us: at CADT, we love node.js!');
            }
            break;
        case '/contact-us':
            if (method === 'GET') {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                return res.end('You can reach us via email...');
            }
            break;
        case '/products':
            if (method === 'GET') {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                return res.end('Buy one get one...');
            }
            break;
        case '/projects':
            if (method === 'GET') {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                return res.end('Here are our awesome projects');
            }
            break;
        case '/contact':
            if (method === 'GET') {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                return res.end(`
                  <form method="POST" action="/contact">
                    <input type="text" name="name" placeholder="Your name" />
                    <button type="submit">Submit</button>
                  </form>
                `);
            }
            break;
    }

    res.writeHead(404, { 'Content-Type': 'text/plain' });
    return res.end('404 Not Found');
});

server.listen(3001, () => {
    console.log('Server is running at http://localhost:3001');
});