// server.js
// import fs from 'fs';
const fs = require('fs');
const http = require('http');

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
        // Implement form submission handling
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const name = new URLSearchParams(parsedBody).get('name');
            fs.appendFile('submissions.json', JSON.stringify({ name }) + '\n', (err) => {
                if (err) {
                    console.log('Error writing to file', err);
                } else {
                    console.log('Form submission saved to file');
                }
            })
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`
                <h1>Thank you, ${name}!</h1>
                <p>Your submission has been received.</p>
            `);
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
