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
        req.on('end', () => {
            const name = new URLSearchParams(body).get('name');

            if (!name || name.trim() === '') {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                return res.end('Name is required');
            }

            console.log(`Received name: ${name}`);

            let submissions = [];

            try{
                const data = fs.readFileSync('submissions.txt', 'utf8');
                submissions = JSON.parse(data);
            } catch (err) {
                console.error('Error reading file:', err);
            }

            const formatTimestamp = () => {
                return new Date().toLocaleString('en-US', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                });
            };

            const newSubmission = {
                id: submissions.length + 1,
                name: name.trim(),
                timestamp: formatTimestamp()
            };
            console.log('New submission:', newSubmission);

            submissions.push(newSubmission);
            fs.writeFile('submissions.txt', JSON.stringify(submissions, null, 2), (err) => {
                if (err) {
                    console.error('Error writing file:', err);
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    return res.end('Internal Server Error');
                }
            });
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`Thank you, ${name}, for your submission!`);

        });
        return;
    }

    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('404 Not Found');
    }
});

server.listen(4000, () => {
    console.log('Server is running at http://localhost:4000');
});
