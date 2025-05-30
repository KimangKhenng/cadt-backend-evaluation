// server.js
const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    console.log(`Received ${method} request for ${url}`);

    switch (true){
        case method === 'GET' && url === '/about':
            res.writeHead(200,{'Content-Type' : 'text/html'});
            res.end('<h1>About us: at CADT, we love node.js!</h1>');
            break;
        case method === 'GET' && url === '/contact-us':
            res.writeHead(200,{'Content-Type' : 'text/html'});
            res.end('<h1>You can reach us vai email…</h1>');
            break;
        case method === 'GET' && url === '/products':
            res.writeHead(200,{'Content-Type' : 'text/html'});
            res.end('<h1>Buy one get one…</h1>');
            break;
        case method === 'GET' && url === '/projects':
            res.writeHead(200,{'Content-Type' : 'text/html'});
            res.end('<h1>Here are our awesome projects</h1>');
            break;
        default:
            res.writeHead(400,{'Content-Type': 'text/plain'});
            res.end('404 Not found')
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
