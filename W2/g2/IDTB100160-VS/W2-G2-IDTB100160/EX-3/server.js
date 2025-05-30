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
            body += chunk.toString(); // Convert Buffer to string
        });

        // Once all data is received
        req.on('end', () => {
            const parsed = new URLSearchParams(body); //turns input into a searchable object.
            const name = parsed.get('name');

            if (!name || name.trim() === '') {
                res.writeHead(400, {'Content-Type': 'text/html'});
                return res.end('<h2>Name is required!</h2><a href="/contact">Go Back</a>');
            }

            console.log(`Received name: ${name}`);

            fs.appendFile('Submissions.txt', `Name: ${name}\n`, (err) => {
                if (err) {
                    console.error('Error writing to file', err);
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    return res.end('Internal Server Error');
                }

                res.writeHead(200, { 'Content-Type': 'text/html' });
                return res.end(`
                    <html>
                        <head>
                            <title>Submission Successful</title>
                        </head>
                        <body>
                            <h1>Thank you, ${name}!</h1>
                            <p>Your submission has been received.</p>
                            <a href="/contact">Submit Another</a>
                        </body>
                    </html>
                `);
            });
        });
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
