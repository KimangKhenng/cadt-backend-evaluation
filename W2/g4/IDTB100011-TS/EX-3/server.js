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
            body += chunk.toString(); 
        });

        req.on('end', () => {
            const params = new URLSearchParams(body);
            const name = params.get('name');

            if (!name || name.trim() === '') {
                res.writeHead(400, { 'Content-Type': 'text/html' });
                return res.end('<h1>400 Bad Request</h1><p>Name cannot be empty.</p>');
            }

            // // Append name to file
            // fs.appendFile('submissions.txt', name + '\n', (err) => {
            //     if (err) {
            //         console.error("File write error:", err);
            //         res.writeHead(500, { 'Content-Type': 'text/plain' });
            //         return res.end('Internal Server Error');
            //     }

            //     // Send confirmation HTML
            //     res.writeHead(200, { 'Content-Type': 'text/html' });
            //     res.end(`<h1>Thank you, ${name}!</h1><p>Your submission has been received.</p>`);
            // });

            const submission = {
                name: name.trim(),
                timestamp: new Date().toISOString()
            };

            const filePath = path.join(__dirname, 'submissions.json');

            fs.readFile(filePath, 'utf8', (err, data) => {
                let submissions = [];

                if (!err && data) {
                    try {
                        submissions = JSON.parse(data);
                    } catch (e) {
                        console.error("JSON parse error:", e);
                    }
                }

                submissions.push(submission);

                fs.writeFile(filePath, JSON.stringify(submissions, null, 2), (err) => {
                    if (err) {
                        console.error("Write error:", err);
                        res.writeHead(500, { 'Content-Type': 'text/plain' });
                        return res.end('Internal Server Error');
                    }

                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(`
                        <h1>Thank you, ${submission.name}!</h1>
                        <p>Your submission was saved at ${submission.timestamp}</p>
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
