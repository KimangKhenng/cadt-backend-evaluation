// server.js
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
//     }
//     // Implement more routes here
//     else {
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         return res.end('404 Not Found');
//     }
// });

// server.listen(3000, () => {
//     console.log('Server is running at http://localhost:3000');
// });



// server.js
const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    console.log(`Received ${method} request for ${url}`);

    // Using switch statement for better organization as requested in TASK 2
    switch(url) {
        case '/':
            if (method === 'GET') {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('Welcome to the Home Page');
            }
            break;
            
        case '/about':
            if (method === 'GET') {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('About us: at CADT, we love node.js!');
            }
            break;
            
        case '/contact-us':
            if (method === 'GET') {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('You can reach us via email...');
            }
            break;
            
        case '/products':
            if (method === 'GET') {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('Buy one get one...');
            }
            break;
            
        case '/projects':
            if (method === 'GET') {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
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


/*
1. When i visit a URL that doesn't match any defined routes, the default case is triggered, returning a 404 Not Found response.

2. We check both req.url and req.method to ensure we handle the correct combination of route and HTTP method, which is essential for RESTful API design.

3. For HTML responses, we set the Content-Type header to 'text/html', and for plain text responses, we use 'text/plain'. This tells browsers how to interpret and render the content.

4. As routes grow, this routing logic will become more complex and harder to maintain. The nested if statements or large switch blocks can get unwieldy.

5. A framework like Express would offer:
. Simplified routing with dedicated route handlers
. Middleware support for common operations
. Built-in parsing for request bodies
. Error handling
. Template rendering
*/
