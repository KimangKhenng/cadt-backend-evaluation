// server.js
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
            <input type="text" name="name" placeholder="Your name" />
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
            const parsed = querystring.parse(body);
            const name = parsed.name?.trim();

            console.log('Received name:', name);

            // Bonus 1: Validate name
            if (!name) {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                return res.end('Name is required.');
            }

            // Bonus 3: Save as JSON
            const submission = {
                name: name,
                timestamp: new Date().toISOString()
            };

            fs.appendFile('submissions.txt', JSON.stringify(submission) + '\n', (err) => {
                if (err) {
                    console.error('Error writing to file:', err);
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    return res.end('Server error');
                }

                // Bonus 2: Send confirmation HTML page
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(`
                  <html>
                    <head><title>Success</title></head>
                    <body>
                      <h2>Thank you, ${name}, for your submission!</h2>
                    </body>
                  </html>
                `);
            });
        });

        req.on('error', err => {
            console.error('Request error:', err);
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('Bad Request');
        });

        return;
    }

    // Default 404
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
