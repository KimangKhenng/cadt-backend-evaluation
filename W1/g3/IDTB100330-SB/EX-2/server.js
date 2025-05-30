// server.js
const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    console.log(`Received ${method} request for ${url}`);
    if (method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        switch (url) {
            case '/':res.end(`
                <html>
                    <head><title>Home</title></head>
                    <body>
                        <h1>Welcome to the Home Page</h1>
                        <p>This is a simple Node.js server.</p>
                    </body>
                </html>
            `);
            break;
            case '/about':res.end(`About us: at CADT, we love node.js! `);
            break;
            case '/contact-us':res.end(`You can reach us vai email…`);
            break;
            case '/products':res.end(`Buy one get one… `);
            break;
            case '/projects':res.end(`Here are our awesome projects `);
            break;
        }
    }

});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
