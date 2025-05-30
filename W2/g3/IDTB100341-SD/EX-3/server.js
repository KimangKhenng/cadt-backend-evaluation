// server.js
const http = require('http');
const fs = require('fs')
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
            const params = new URLSearchParams(body);
            const name = params.get('name');
            if (!name) {
                res.writeHead(400, { 'Content-Type': 'text/html' });
                return res.end(`<h1>Error: Name is required.</h1>`);
            }
    
            console.log('Submitted name:', name);
            const submission = { name };
    
            // Read the current file (if exists) and parse as array
            fs.readFile('submissions.json', 'utf8', (err, data) => {
                let submissions = [];
                if (!err && data) {
                    try {
                        submissions = JSON.parse(data);
                    } catch (e) {
                        // If JSON is invalid, reset to empty array
                        console.error('Invalid JSON in file, resetting file.');
                        submissions = [];
                    }
                }
    
                submissions.push(submission);
    
                // Write updated array back to file
                fs.writeFile('submissions.json', JSON.stringify(submissions, null, 2), (err) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' });
                        return res.end('Error saving submission');
                    }
    
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(`
                        <html>
                            <head><title>Thank You</title></head>
                            <body>
                                <h1>Thank you, ${name}!</h1>
                                <p>Your submission was received.</p>
                            </body>
                        </html>
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
