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
            body += chunk.toString();
        });

        req.on('end', () => {
            const name = new URLSearchParams(body).get('name')?.trim();
            
            if(!name) {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                return res.end('Name is required');
            }

            const entry = { name, time: new Date().toISOString() };

            fs.readFile('submissions.json', 'utf8', (err, data) => {
                let submissions = [];

                if (!err && data) {
                    try {
                        submissions = JSON.parse(data);
                    } catch (parseErr) {
                        
                        submissions = [];
                    }
                }

                submissions.push(entry);

                fs.writeFile('submissions.json', JSON.stringify(submissions, null, 2), err => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/html' });
                        return res.end('<h1>Server error</h1>');
                    }

                    // Send confirmation HTML
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(`
                        <h1>Thank you, ${name}!</h1>
                        <p>Your submission was received.</p>
                    `);
                });
            });
        });
    
    }

    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('404 Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
