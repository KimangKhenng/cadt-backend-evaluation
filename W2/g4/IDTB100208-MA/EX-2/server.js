// // server.js
// const http = require('http');

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     const method = req.method;

//     console.log(`Received ${method} request for ${url}`);

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
//     }else if(url === '/about' && method === 'GET'){
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         return res.end(`
//             <html>
//                 <head><title>About us</title></head>
//                 <body>
//                     <h1>Welcome to the About us Page</h1>
//                     <p> At CADT, we love node.js!</p>
//                 </body>
//             </html>
//         `);
//     }else if(url === '/contact-us' && method === 'GET'){
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         return res.end(`
//             <html>
//                 <head><title>Contact Us</title></head>
//                 <body>
//                     <h1>Welcome to the Contact Us Page</h1>
//                     <p> You can reach us vai email…</p>
//                 </body>
//             </html>
//         `);
//     }else if(url === '/products' && method === 'GET'){
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         return res.end(`
//             <html>
//                 <head><title>Products</title></head>
//                 <body>
//                     <h1>Welcome to the Products Page</h1>
//                     <p> Buy one get one…</p>
//                 </body>
//             </html>
//         `);
//     }else if(url === '/projects' && method === 'GET'){
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         return res.end(`
//             <html>
//                 <head><title>Projects</title></head>
//                 <body>
//                     <h1>Welcome to the Projects Page</h1>
//                     <p> Here are our awesome projects</p>
//                 </body>
//             </html>
//         `);
//     }else {
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         return res.end('404 Not Found');
//     }
// });

// server.listen(3000, () => {
//     console.log('Server is running at http://localhost:3000');
// });

// The previus code that use if elee statement


// server.js
const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    console.log(`Received ${method} request for ${url}`);
    
    switch (url) {
        case '/':
            if (method === 'GET') {
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
            break;
        case '/about':
            if (method === 'GET') {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                return res.end(`
                    <html>
                        <head><title>About us</title></head>
                        <body>
                            <h1>Welcome to the About us Page</h1>
                            <p> At CADT, we love node.js!</p>
                        </body>
                    </html>
                `);
            }
            break;
        case '/contact-us':
            if (method === 'GET') {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                return res.end(`
                    <html>
                        <head><title>Contact Us</title></head>
                        <body>
                            <h1>Welcome to the Contact Us Page</h1>
                            <p> You can reach us via email…</p>
                        </body>
                    </html>
                `);
            }
            break;
        case '/products':
            if (method === 'GET') {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                return res.end(`
                    <html>
                        <head><title>Products</title></head>
                        <body>
                            <h1>Welcome to the Products Page</h1>
                            <p> Buy one get one…</p>
                        </body>
                    </html>
                `);
            }
            break;
        case '/projects':
            if (method === 'GET') {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                return res.end(`
                    <html>
                        <head><title>Projects</title></head>
                        <body>
                            <h1>Welcome to the Projects Page</h1>
                            <p> Here are our awesome projects</p>
                        </body>
                    </html>
                `);
            }
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            return res.end('404 Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
