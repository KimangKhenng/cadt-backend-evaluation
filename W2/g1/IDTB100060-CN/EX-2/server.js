// server.js
const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    console.log(`Received ${method} request for ${url}`);

    // if (url === '/' && method === 'GET') {
    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     return res.end(`
    //         <html>
    //             <head><title>Home</title></head>
    //             <body>
    //                 <h1>Welcome to the Home Page</h1>
    //                 <p>This is a simple Node.js server.</p>
    //             </body>
    //         </html>
    //     `);
    // } 
    // // Implement more routes here
    // else if (url === '/about' && method === 'GET') {
    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     return res.end(`
    //         <html>
    //             <head><title>About us</title></head>
    //             <body>
    //                 <h1>About us: at CADT</h1>
    //                 <p>We love node.js!</p>
    //             </body>
    //         </html>
    //     `);
    // } else if (url === '/contact-us' && method === 'GET') {
    //     res.writeHead(200, { 'Content-Type' : 'text/html' });
    //     return res.end (`
    //         <html>
    //             <head><title>Contact us</title></head>
    //             <body>
    //                 <h1>Contact us</h1>
    //                 <p>You can reach us via email: <a href="mailto:pr@cadt.edu.kh">pr@cadt.edu.kh</a></p>
    //             </body>
    //         </html>       
    //     `)
    // } else if (url === '/products' && method === 'GET') {
    //     res.writeHead(200, { 'Content-Type' : 'text/html' });
    //     return res.end(`
    //          <html>
    //             <head><title>Products</title></head>
    //             <body>
    //                 <h1>Products</h1>
    //                 <p>Buy one get one!</p>
    //             </body>
    //         </html>   
    //     `)
    // } else if (url === '/projects' && method === 'GET') {
    //     res.writeHead(200, { 'Content-Type' : 'text/html' });
    //     return res.end(`
    //          <html>
    //             <head><title>Projects</title></head>
    //             <body>
    //                 <h1>Projects</h1>
    //                 <p>Here are our awesome projects!!!</p>
    //             </body>
    //         </html>
    //     `)
    // }
    
    // else {
    //     res.writeHead(404, { 'Content-Type': 'text/plain' });
    //     return res.end('404 Not Found');
    // }

    switch (true) {
        case url === '/' && method === 'GET':
            res.writeHead(200, { 'Content-Type' : 'text/plain' });
            res.end('Welcome to home page! This is a simple Node.js server.');
            break;

        case url === '/about' && method === 'GET':
            res.writeHead(200, { 'Content-Type' : 'text/plain' });
            res.end('About us: at CADT, we love node.js!');
            break;

        case url === '/contact-us' && method === 'GET':
            res.writeHead(200, { 'Content-Type' : 'text/plain' });
            res.end('You can reach us vai email...');
            break;

        case url === '/products' && method === 'GET':
            res.writeHead(200, { 'Content-Type' : 'text/plain' });
            res.end('Buy one get one...');
            break;

        case url === '/projects' && method === 'GET':
            res.writeHead(200, { 'Content-Type' : 'text/plain' });
            res.end('Here are our awesome projects');
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
