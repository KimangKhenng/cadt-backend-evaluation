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

    else if (url === '/contact' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
          <form method="POST" action="/contact">
            <input type="text" name="name" placeholder="Your name" />
            <button type="submit">Submit</button>
          </form>
        `);
        return;
    }

    else if (url === '/contact' && method === 'POST') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const formData = new URLSearchParams(body);
            const name = formData.get('name')?.trim();

            
            if (!name) {
                res.writeHead(400, { 'Content-Type': 'text/html' });
                return res.end(`
                    <h1>Error: Name is required!</h1>
                    <p>Please go back and enter your name.</p>
                    <a href="/contact">Return to Contact Form</a>
                `);
            }

            const jsonFilePath = path.join(__dirname, 'submissions.json');

            fs.readFile(jsonFilePath, 'utf8', (err, data) => {
                let submissions = [];

                if (!err && data) {
                    try {
                        submissions = JSON.parse(data);
                    } catch (e) {
                        console.error('Invalid JSON format. Starting new file.');
                    }
                }

                submissions.push({ name, submittedAt: new Date().toISOString() });

                fs.writeFile(jsonFilePath, JSON.stringify(submissions, null, 2), (err) => {
                    if (err) {
                        console.error('Error writing JSON:', err);
                        res.writeHead(500, { 'Content-Type': 'text/plain' });
                        return res.end('Internal Server Error');
                    }

                    const txtFilePath = path.join(__dirname, 'submissions.txt');
                    fs.appendFile(txtFilePath, `${name}\n`, (err) => {
                        if (err) {
                            console.error('Error writing to text file:', err);
                            res.writeHead(500, { 'Content-Type': 'text/plain' });
                            return res.end('Internal Server Error');
                        }

                        res.writeHead(200, { 'Content-Type': 'text/html' });
                        res.end(`
                            <h1>Thank you for your submission, ${name}!</h1>
                            <p>Your name has been saved successfully.</p>
                            <a href="/">Return to Home</a>
                        `);
                    });
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

server.listen(3003, () => {
    console.log('Server is running at http://localhost:3003');
});
