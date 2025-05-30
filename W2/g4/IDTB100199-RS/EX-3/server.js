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
        let body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const name = new URLSearchParams(parsedBody).get('name');

            if (!name || name.trim() === '') {
                res.writeHead(400, { 'Content-Type': 'text/html' });
                return res.end('<h3>Error: Name field cannot be empty!</h3>');
            }

            const submission = { name, timestamp: new Date().toISOString() };

            fs.readFile('submissions.json', (err, data) => {
                let submissions = [];
                if (!err) {
                    try {
                        submissions = JSON.parse(data);
                    } catch (parseErr) {
                        console.error('Error parsing JSON:', parseErr);
                    }
                }

                submissions.push(submission);

                fs.writeFile('submissions.json', JSON.stringify(submissions, null, 2), (err) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/html' });
                        return res.end('<h3>Error saving data</h3>');
                    }

                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(`
                        <h3>Thank you for submitting your name!</h3>
                        <p>Your name: ${name}</p>
                        <p>Submission saved successfully.</p>
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
