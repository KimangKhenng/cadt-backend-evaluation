// server.js
const fs = require('fs');
const http = require('http');
const path = require('path');

const submissionsFile = path.join(__dirname, 'submissions.json');
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
            body += chunk.toString();
        });
        req.on('end', () => {
            const formData = new URLSearchParams(body);
            const name = formData.get('name');
            console.log('Receiced name:', name);
            if (!name || name.trim() === '') {
                res.writeHead(400, { 'Content-Type': 'text/html' });
                return res.end('<h3>Error: Name is required!</h3><a href="/contact">Go back</a>');
            }
            const newSubmission = { name:name.trim(), date: new Date().toISOString() };
            fs.readFile(submissionsFile, 'utf8', (err, data) => {
                data = data || '[]';
                if (err) {
                    console.error(err);
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    return res.end('Internal Server Error');
                }
                let submissions = JSON.parse(data);
                submissions.push(newSubmission);
                fs.appendFile(submissionsFile, JSON.stringify(submissions, null, 2), 'utf8', (err) => {
                    if (err) {
                        console.error(err);
                        res.writeHead(500, { 'Content-Type': 'text/plain' });
                        return res.end('Internal Server Error');
                    }
                    res.writeHead(200, { 'Content_Type': 'text/html' });
                    return res.end(`
                         <!DOCTYPE html>
                            <html>
                            <head>
                                <title>Submission Received</title>
                                <style>
                                body { font-family: sans-serif; padding: 2em; background:rgb(20, 14, 14); }
                                .container { background: white; padding: 1em; border-radius: 8px; max-width: 400px; margin: auto; text-align: center; }
                                </style>
                            </head>
                            <body>
                                <div class="container">
                                <h2>Thank you, ${newSubmission.name}!</h2>
                                <p>Your form has been submitted successfully.</p>
                                <a href="/contact">Submit another</a>
                                </div>
                            </body>
                            </html>
                    `);
                });
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
