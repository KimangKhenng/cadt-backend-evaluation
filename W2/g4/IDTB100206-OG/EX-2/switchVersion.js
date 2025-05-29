const http = require('http');

const server = http.createServer((req, res) =>{
    const url = req.url;
    const method = req.method;

    console.log(`Received ${method} request for ${url}`);
    if(req.method === 'GET'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        switch(url) {
            case '/':
                return res.end(`
                    <html>
                        <head><title>Home</title></head>
                        <body>
                            <h1>Welcome to the Home Page</h1>
                            <p>This is a simple Node.js server.</p>
                        </body>
                    </html>
                `);
            break;
            case '/about':
                return res.end(`
                    <html>
                        <head><title>About</title></head>
                        <body>
                            <h1>About Us</h1>
                            <p>At CADT, we love node.js! </p>
                        </body>
                    </html>
                `);
                break;
            case '/contact-us':
                return res.end(`
                    <html>
                        <head><title>About</title></head>
                        <body>
                            <h1>Contact Us</h1>
                            <p>You can research us via email</p>
                        </body>
                    </html>
                `);
                break;
            case '/product':
                return res.end(`
                    <html>
                        <head><title>Product</title></head>
                        <body>
                            <h1>Product</h1>
                            <p>Buy one get one... </p>
                        </body>
                    </html>
                `);
            break;
            case '/project':
                return res.end(`
                    <html>
                        <head><title>Project</title></head>
                        <body>
                            <h1>Project</h1>
                            <p>Here are our awsome project!</p>
                        </body>
                    </html>
                `);
                break;
            default:
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                return res.end('404 Not Found');
                break;
        }
    }
})

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
