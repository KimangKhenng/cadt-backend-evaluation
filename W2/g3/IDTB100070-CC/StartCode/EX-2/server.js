// server.js
const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    console.log(`Received ${method} request for ${url}`);


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
                res.writeHead(200, { 'Content-Type': 'text/html' });
                return res.end(`
                    <html>
                        <head><title>About</title></head>
                        <body>
                            <h1>Welcome to the About Page</h1>
                            <p>About us: at CADT, we love node.js!</p>
                        </body>
                    </html>
                `);
            case '/contact-us':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                return res.end(`
                    <html>
                        <head><title>Contact Us</title></head>
                        <body>
                            <h1>Welcome to the Contact Us Page</h1>
                            <p>You can reach us via email…</p>
                        </body>
                    </html>
                `);
            case '/products':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                return res.end(`
                    <html>
                        <head><title>Products</title></head>
                        <body>
                            <h1>Welcome to the Products Page</h1>
                            <p>Buy one get one…</p>
                        </body>
                    </html>
                `);
            case '/projects':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                return res.end(`
                    <html>
                        <head><title>Projects</title></head>
                        <body>
                            <h1>Welcome to the Projects Page</h1>
                            <p>Here are our awesome projects</p>
                        </body>
                    </html>
                `);
            default:
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                return res.end('404 Not Found');
        }
    }
    




    
});



server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
// 1. What happens when you visit a URL that doesn’t match any of the three defined?
// it will go to default page said 404 not found
// 2. Why do we check both the req.url and req.method?
// because we want to check the url and method of the request
// 3. What MIME type (Content-Type) do you set when returning HTML instead of plain text?
//  text/html 
// 4. How might this routing logic become harder to manage as routes grow?
// it will be hard to manage because we have to check all the routes and methods
// 5. What benefits might a framework offer to simplify this logic?
// it will help us to manage the routes and methods easily