// server.js
// const http = require('http');
import http from 'http';

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

        req.on('data', (chunk) => {
            body += chunk.toString(); // Convert Buffer to string
        });

        req.on('end', () => {
            const params = new URLSearchParams(body);
            const name = params.get('name');

            if (!name || name.trim() === '') {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                return res.end('Name is required');
            }

            // Append to file
            import('fs').then(fs => {
                const filePath = './EX-3/submissions.json';

                fs.readFile(filePath, 'utf8', (err, data) => {
                    let submissions = [];
                    if (!err && data) {
                        try {
                            submissions = JSON.parse(data);
                        } catch (e) {
                            // If file is corrupted, reset it
                            submissions = [];
                        }
                    }

                    submissions.push({ name });

                    fs.writeFile(filePath, JSON.stringify(submissions, null, 2), err => {
                        if (err) {
                            res.writeHead(500, { 'Content-Type': 'text/plain' });
                            return res.end('Failed to save name');
                        }

                        // Send success response
                        res.writeHead(200, { 'Content-Type': 'text/html' });
                        res.end(`<h2>Thank you, ${name}!</h2>`);
                    });
                });
            });
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('404 Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
