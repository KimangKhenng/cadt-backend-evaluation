// server.js
const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    console.log(`Received ${method} request for ${url}`);

    if (url === '/' && method === 'GET') {
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
    // Implement more routes here
//     if (url === '/about' && method === 'GET') {
//         res.writeHead(200, { 'content-type': 'text/html'});
//         return res.end(`
//             <html>
//                 <head><title>About Us</title>
//                 <body>
//                     <h1>About us: at CADT, we love node.js!</h1>
//                 </body>
//                 </head>
//             </html>`);
//     }
//     if (url === '/contact-us' && method === 'GET') {
//         res.writeHead(200, { 'content-type': 'text/html'});
//         return res.end(`
//             <html>
//                 <head><title>Contact Us</title>
//                 <body>
//                     <h1>You can reach us via email</h1>
//                 </body>
//                 </head>
//             </html>`);
//     }
//     if (url === '/products' && method === 'GET') {
//         res.writeHead(200, { 'content-type': 'text/html'});
//         return res.end(`
//             <html>
//                 <head><title>Products</title>
//                 <body>
//                     <h1>Buy one get one</h1>
//                 </body>
//                 </head>
//             </html>`);
//     }
//     if (url === '/projects' && method === 'GET') {
//         res.writeHead(200, { 'content-type': 'text/html'});
//         return res.end(`
//             <html>
//                 <head><title>Projects</title>
//                 <body>
//                     <h1>Here are our awsome projects</h1>
//                 </body>
//                 </head>
//             </html>`);
//     }
//     else {
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         return res.end('404 Not Found');
//     }
// });

//TASK 2 – As we can see the complexitiy grow as we add more routes. Use switch statement to arrange the code into more organized structure. 

switch (true) {
    // Home Page (GET /)
    case url === '/' && method === 'GET':
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

    // About Page (GET /about)
    case url === '/about' && method === 'GET':
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <html>
                <head><title>About Us</title></head>
                <body>
                    <h1>About us: at CADT, we love node.js!</h1>
                </body>
            </html>
        `);
        break;

    // Contact Page (GET /contact-us)
    case url === '/contact-us' && method === 'GET':
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <html>
                <head><title>Contact Us</title></head>
                <body>
                    <h1>You can reach us via email</h1>
                </body>
            </html>
        `);
        break;

    // Products Page (GET /products)
    case url === '/products' && method === 'GET':
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <html>
                <head><title>Products</title></head>
                <body>
                    <h1>Buy one get one</h1>
                </body>
            </html>
        `);
        break;

    // Projects Page (GET /projects)
    case url === '/projects' && method === 'GET':
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <html>
                <head><title>Projects</title></head>
                <body>
                    <h1>Here are our awesome projects</h1>
                </body>
            </html>
        `);
        break;

    // 404 - Not Found (All other cases)
    default:
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
}
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
