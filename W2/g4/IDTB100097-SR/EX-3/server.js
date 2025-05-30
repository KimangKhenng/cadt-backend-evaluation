// server.js
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    console.log(`Received ${method} request for ${url}`);

    if (url === '/' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        return res.end('Welcome to the Home Page');
    }

    if (url === '/contact' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end(`
            <form method="POST" action="/contact" enctype="application/x-www-form-urlencoded">
                <input type="text" name="name" placeholder="Your name" required />
                <button type="submit">Submit</button>
            </form>
        `);
    }

    if (url === '/contact' && method === 'POST') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            console.log('Form body:', body); // For debugging

            const parsedData = new URLSearchParams(body);
            const name = parsedData.get('name');

            if (name) {
                fs.appendFile('submissions.txt', name + '\n', (err) => {
                    if (err) {
                        console.error('Failed to write:', err);
                        res.writeHead(500, { 'Content-Type': 'text/plain' });
                        return res.end('Error writing file');
                    }

                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end('Thank you, your name was submitted!');
                });
            } else {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end('Name is required');
            }
        });

        return;
    }

    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
