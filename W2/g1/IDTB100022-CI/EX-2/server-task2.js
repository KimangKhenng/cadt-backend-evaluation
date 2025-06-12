import { createServer } from 'http';

const server = createServer((req, res) => {
    const { url, method } = req;

    console.log(`Received ${method} request for ${url}`);

    res.writeHead(200, { 'Content-Type': 'text/plain' });

    switch (url) {
        case '/':
            if (method === 'GET') {
                res.end('Welcome to the Home Page\nThis is a simple Node.js server.');
            }
            break;

        case '/about':
            if (method === 'GET') {
                res.end('About us: at CADT, we love node.js!');
            }
            break;

        case '/contact-us':
            if (method === 'GET') {
                res.end('You can reach us via email');
            }
            break;

        case '/products':
            if (method === 'GET') {
                res.end('Buy one, get one!');
            }
            break;

        case '/projects':
            if (method === 'GET') {
                res.end('Here are our awesome projects');
            }
            break;

        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
            break;
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
