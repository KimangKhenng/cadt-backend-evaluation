const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

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
        res.end(`
            <form method="POST" action="/contact">
                <input type="text" name="name" placeholder="Your name" required />
                <button type="submit">Submit</button>
            </form>
        `);
        return;
    }

    if (url === '/contact' && method === 'POST') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const parsedData = querystring.parse(body);
            const name = parsedData.name;

            if (!name) {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                return res.end('Name is required.');
            }

            console.log(`Contact form submitted. Name: ${name}`);

            fs.appendFile('submissions.txt', `${name}\n`, err => {
                if (err) {
                    console.error('Failed to write to file:', err);
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    return res.end('Internal Server Error');
                }

                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(`<h1>Thank you, ${name}. Your submission was received!</h1>`);
            });
        });

        req.on('error', err => {
            console.error('Request error:', err);
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('Bad Request');
        });

        return;
    }

    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
