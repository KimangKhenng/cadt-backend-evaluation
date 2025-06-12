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
            const params = new URLSearchParams(body);
            const name = params.get('name')?.trim();

            if (!name) {
                res.writeHead(400, { 'Content-Type': 'text/html' });
                return res.end(`
                    <h2>Submission failed</h2>
                    <p>Name field cannot be empty.</p>
                    <a href="/contact">Go back</a>
                `);
            }

            // Read existing submissions or initialize array
            fs.readFile('submissions.json', 'utf8', (err, data) => {
                let submissions = [];
                if (!err && data) {
                    try {
                        submissions = JSON.parse(data);
                    } catch (parseErr) {
                        console.error('Error parsing JSON:', parseErr);
                    }
                }

                submissions.push({ name });

                fs.writeFile('submissions.json', JSON.stringify(submissions, null, 2), err => {
                    if (err) {
                        console.error('Error writing to file:', err);
                        res.writeHead(500, { 'Content-Type': 'text/html' });
                        return res.end(`<h2>Server error</h2><p>Try again later.</p>`);
                    }

                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(`
                        <h2>Thank you, ${name}!</h2>
                        <p>Your submission has been received.</p>
                        <a href="/contact">Submit another</a>
                    `);
                });
            });
        });

        return;
    }

    // 404 for other routes
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
