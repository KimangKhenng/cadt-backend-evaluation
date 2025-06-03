// server.js
const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    const route = `${method} ${url}`;

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
    // else if(url === '/about' && method === 'GET'){
    //     res.writeHead(200, {'Content-type': 'text/html'});
    //     return res.end(`
    //         <html>
    //             <body>
    //                 <h1>About us: at CADT, we love node.js!</h1>
    //             </body> 
    //         </html>
    //         `);
    // }
    // else if(url === '/contact-us' && method === 'GET'){
    //     res.writeHead(200, {'Content-type': 'text/html'});
    //     res.end(`
    //         <html>
    //             <body>
    //                 <h1> You can reach us via email.......</h1>
    //             </body>
    //         </html>
    //         `);
    // }
    // else if(url === '/products' && method === 'GET'){
    //     res.writeHead(200, {'Content-type': 'text/html'});
    //     res.end(`
    //         <html>
    //             <body>
    //                 <h1>Buy one get one....</h1>
    //             </body>
    //         </html>
    //         `);
    // }
    // else if(url === '/projects' && method === 'GET'){
    //     res.writeHead(200, {'Content-type': 'text/html'});
    //     res.end(`
    //         <html>
    //             <body>
    //                 <h1>Here are our awesome projects</h1>
    //             </body>
    //         </html>
    //         `);
    // }
    // else {
    //     res.writeHead(404, { 'Content-Type': 'text/plain' });
    //     return res.end('404 Not Found');
    // }

    // task 2 convert the if-else to switch 
    switch(route){
        case('GET /'):
            res.writeHead(200, {'Content-type': 'text/html'});
            return res.end(`
                <html>
                    <body>
                        <h1>About us: at CADT, we love node.js!</h1>
                    </body> 
                </html>
                `);
        
        case('GET /about'):
            res.writeHead(200, {'Content-type': 'text/html'});
            return res.end(`
                <html>
                    <body>
                        <h1>About us: at CADT, we love node.js!</h1>
                    </body> 
                </html>
                `);

        case('GET /contact-us'):
            res.writeHead(200, {'Content-type': 'text/html'});
            res.end(`
                <html>
                    <body>
                        <h1> You can reach us via email.......</h1>
                    </body>
                </html>
                `);
        case('GET /products'):
            res.writeHead(200, {'Content-type': 'text/html'});
            res.end(`
                <html>
                    <body>
                        <h1>Buy one get one....</h1>
                    </body>
                </html>
                `);
        
        case('GET /projects'):
            res.writeHead(200, {'Content-type': 'text/html'});
            res.end(`
                <html>
                    <body>
                        <h1>Here are our awesome projects</h1>
                    </body>
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
