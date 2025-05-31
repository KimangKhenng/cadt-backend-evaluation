// server.js
const http = require('http');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'submissions.txt');


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
        // Implement form submission handlingco
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on ('end', () => {
            try {
                fs.appendFileSync(filePath, body + '\n');
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end("Data recieved"); 
            } catch (err) {
                console.error('Error writing to file', err);
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end("Internal Server Error");
            }
            // const input = body.split('=')[1];
            // fs.writeFileSync(filePath, input );

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end("Data Recieved");
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
