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
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const parsedData = new URLSearchParams(body);
            const name = parsedData.get('name');

            if (!name) {
                res.writeHead(400, { 'Content-Type': 'text/html' });
                return res.end(`<h1>Error</h1><p>Name is required.</p>`);
            }

            console.log(`Received submission: ${name}`);

            fs.readFile('submissions.json', 'utf-8', (err, data) => {
                let submissions = [];

                if (!err && data) {
                    try {
                        submissions = JSON.parse(data);
                    } catch (parseErr) {
                        console.error('Error parsing JSON:', parseErr);
                        submissions = [];
                    }
                }

                submissions.push(name); 

                fs.writeFile('submissions.json', JSON.stringify(submissions, null, 2), err => {
                    if (err) {
                        console.error('Error writing to file:', err);
                        res.writeHead(500, { 'Content-Type': 'text/html' });
                        return res.end('<h1>500 Internal Server Error</h1>');
                    }

                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(`
                        <h1>Thank you!</h1>
                        <p>Your name has been saved: ${name}</p>
                        <a href="/contact">Submit another</a>
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
