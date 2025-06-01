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
//     // Implement more routes here
//     else if (url === '/about' && method === 'GET') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         return res.end(`
//             <html>
//                 <div>
//                     About Us: at CADT, we love node.js
//                 </div>
//             </html>
//         `);
//     }
//     else if (url === '/contact' && method === 'GET') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         return res.end(`
//             <html>
//                 <div>
//                     Contact Us: at CADT, we love node.js
//                 </div>
//             </html>
//         `);
//     }
//     else if (url === '/contact-us' && method === 'GET') {
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         return res.end(`
//             <html>
//                 <div>
//                     You can reach us vai email…
//                 </div>
//             </html>
//         `);
//     }
//     else if(url === '/products' && method === 'GET') {
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         return res.end(`
//             <html>
//                 <div>
//                     Buy one get one....
//                 </div>
//             </html>
//         `);
//     }
//     else if(url === '/projects' && method === 'GET') {
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         return res.end(`
//             <html>
//                 <div>
//                     Here are our awesome projects
//                 </div>
//             </html>
//         `);
//     }
//     else {
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         return res.end('404 Not Found');
//     }
// });
// use case instead of if else
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
            res.writeHead(200, { 'Content-Type': 'text/html' });
            return res.end(`
                <html>
                    <div>
                        About Us: at CADT, we love node.js
                    </div>
                </html>
            `);
        
        case '/contact-us':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            return res.end(`
                <html>
                    <div>
                        You can reach us vai email
                    </div>
                </html>
            `);
        case '/products':
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(`
                <html>
                    <div>
                        Buy one get one....
                    </div>
                </html>
            `);
        case '/projects':
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(`
                <html>
                    <div>
                        Here are our awesome projects
                    </div>
                </html>
            `);
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            return res.end('404 Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
