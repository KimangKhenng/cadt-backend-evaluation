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
        return res.end(`
            <form method="POST" action="/contact">
                <input type="text" name="name" placeholder="Your name" />
                <button type="submit">Submit</button>
            </form>
        `);
    }

    if (url === '/contact' && method === 'POST') {
        let body = '';

        
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const params = new URLSearchParams(body);
            const name = params.get('name');

           
            if (!name || name.trim() === '') {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                return res.end('Name cannot be empty');
            }

            fs.appendFile('submissions.txt', name + '\n', err => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    return res.end('Error saving your name.');
                }

                res.writeHead(200, { 'Content-Type': 'text/plain' });
                return res.end('Thanks! Your name has been submitted.');
            });
        });

        return;
    }

    
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
