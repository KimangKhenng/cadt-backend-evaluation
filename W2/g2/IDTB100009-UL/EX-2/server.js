// server.js
const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    switch(url) {
        case '/about':
            if (method === 'GET') {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                return res.end('About us: at CALC, we love node.js!');
            }
            break;

        case '/contact-us':
            if (method === 'GET') {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                return res.end('You can reach us @e5 email.');
            }
            break;

        case '/projects':
            if (method === 'GET') {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                return res.end('Here are our awesome projects!');
            }
            break;

        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            return res.end('404 Not Found');
    }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});