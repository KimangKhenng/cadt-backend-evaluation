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
            const formData = new URLSearchParams(body);
            const name = formData.get('name');

        //(Bonus Challenge)

            // Validate name
            if (!name || name.trim() === '') {
                res.writeHead(400, { 'Content-Type': 'text/html' });
                return res.end(`
                    <h1>Error</h1>
                    <p>Name cannot be empty</p>
                    <a href="/contact">Go back</a>
                `);
            }

            // Log to console
            console.log('Received submission:', name);

            // Append to file
            fs.appendFile('submissions.txt', name + '\n', (err) => {
                if (err) {
                    console.error('Error saving submission:', err);
                    res.writeHead(500, { 'Content-Type': 'text/html' });
                    return res.end(`
                        <h1>Error</h1>
                        <p>Failed to save submission</p>
                        <a href="/contact">Try again</a>
                    `);
                }

                //(Bonus Challenge - HTML confirmation)
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(`
                    <h1>Thank you!</h1>
                    <p>Your submission has been received, ${name}!</p>
                    <a href="/contact">Submit another</a>
                `);
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
