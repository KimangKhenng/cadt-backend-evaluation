// server.js
const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    console.log(`Received ${method} request for ${url}`);

//     if (url === '/' && method === 'GET') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         return res.end(`
//             <html>
//                 <head><title>Home</title></head>
//                 <body>
//                     <h1>Welcome to the Home Page</h1>
//                     <p>This is a simple Node.js server.</p>
//                 </body>
//             </html>
//         `);
//     }

//     else if (url === '/about' && method === 'GET') {
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         return res.end('About us: at CADT, we love node.js!');
//     }
//     else if (url === '/contact-us' && method === 'GET') {
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         return res.end('You can reach us via email…');
//     }
//     else if (url === '/products' && method === 'GET') {
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         return res.end('Buy one get one…');
//     }
//     else if (url === '/projects' && method === 'GET') {
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         return res.end('Here are our awesome projects');
//     }
//     // 404 handler
//     else {
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         return res.end('404 Not Found');
//     }
// });

    res.setHeader('Content-Type', 'text/plain');

    if (method === 'GET') {
        switch (url) {
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
                    return res.end(`
                        <html>
                            <head><title>About</title></head>
                            <body>
                                <h1>About Us</h1>
                                <p>At CADT, we love node.js!</p>
                            </body>
                        </html>
                    `);
    
                case '/contact-us':
                    return res.end(`
                        <html>
                            <head><title>Contact Us</title></head>
                            <body>
                                <h1>Contact Us</h1>
                                <p>You can reach us via email…</p>
                            </body>
                        </html>
                    `);
    
                case '/products':
                    return res.end(`
                        <html>
                            <head><title>Products</title></head>
                            <body>
                                <h1>Our Products</h1>
                                <p>Buy one get one…</p>
                            </body>
                        </html>
                    `);
    
                case '/projects':
                    return res.end(`
                        <html>
                            <head><title>Projects</title></head>
                            <body>
                                <h1>Our Projects</h1>
                                <p>Here are our awesome projects</p>
                            </body>
                        </html>
                    `);
    
                default:
                    res.writeHead(404);
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
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('404 Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
