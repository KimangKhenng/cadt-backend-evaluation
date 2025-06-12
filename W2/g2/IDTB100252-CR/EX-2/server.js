// server.js
const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    console.log(`Received ${method} request for ${url}`);

    if (method === 'GET'){
        switch (url){
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
                res.writeHead(200, { 'Content-Type': 'text/plain'});
                res.end('About us: at CDATASection, we love Node.js!');
                break;
            case '/contact-us':
                res.writeHead(200, { 'Content-Type': 'text/plain'});
                res.end('You can reach us via email!');
                break;
            case '/products':
                res.writeHead(200, { 'Content-Type': 'text/plain'});
                res.end('Buy one get one');
                break;
            case '/projects':
                res.writeHead(200, { 'Content-Type': 'text/plain'});
                res.end('Here are our awesome projects');
                break;
            default:
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                return res.end('404 Not Found');
        }
    }

    // else if (url === '/about' && method === 'GET') {
    //     res.writeHead(200, { 'Content-Type': 'text/plain'});
    //     res.end('About us: at CDATASection, we love Node.js!');
    // } else if (url === '/contact-us' && method === 'GET') {
    //     res.writeHead(200, { 'Content-Type': 'text/plain'});
    //     res.end('You can reach us via email!');
    // }
    // else if (url === '/products' && method === 'GET') {
    //     res.writeHead(200, { 'Content-Type': 'text/plain'});
    //     res.end('Buy one get one');
    // }
    // else if (url === '/projects' && method === 'GET') {
    //     res.writeHead(200, { 'Content-Type': 'text/plain'});
    //     res.end('Here are our awesome projects');
    // }
    // else {
    //     res.writeHead(404, { 'Content-Type': 'text/plain' });
    //     return res.end('404 Not Found');
    // }


});
server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
