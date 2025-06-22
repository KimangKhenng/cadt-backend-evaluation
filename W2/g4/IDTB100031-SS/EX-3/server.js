// server.js
const http = require('http');
const fs = require('fs');
const path = require('path');

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
        // Implement form submission handling
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString()
        });

        req.on('end', () => {
            const params = new URLSearchParams(body);
            const name = params.get('name')?.trim();

            if (!name) {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                return res.end('Name cannot be empty.');
            }

            console.log("Received name: ", name);

            const filePath = path.join(__dirname, 'submissions.txt');

            const data = { name, submittedAt: new Date().toISOString() };
            fs.appendFile(filePath, JSON.stringify(data) + '\n', err => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    return res.end('Error saving your submission.');
                }

                res.writeHead(200, { 'Content-Type': 'text/html' });
                return res.end(`
                    <html>
                        <body>
                            <h2>Thanks, ${name}!</h2>
                            <p>Your submission was received.</p>
                            <a href="/contact">Submit another</a>
                        </body>
                    </html>
                `);
            })
        })
        return;
    }

    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('404 Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
