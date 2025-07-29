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
        req.on('data', chunk => body += chunk.toString());
        req.on('end', () => {
            const name = new URLSearchParams(body).get('name').trim();
            
            // Validation
            if (!name) {
                res.writeHead(400, { 'Content-Type': 'text/html' });
                return res.end(`
                    <h1>Error</h1>
                    <p>Name cannot be empty!</p>
                    <a href="/contact">Try again</a>
                `);
            }
            
            // Save as JSON
            const submission = { 
                name: name, 
                timestamp: new Date().toISOString() 
            };
    
            fs.readFile('submissions.json', 'utf8', (err, data) => {
                let submissions = [];
                if (!err && data) submissions = JSON.parse(data);
                
                submissions.push(submission);
                
                fs.writeFile('submissions.json', JSON.stringify(submissions, null, 2), (err) => {
                    if (err) {
                        console.error('Error writing to file', err);
                        res.writeHead(500, { 'Content-Type': 'text/html' });
                        return res.end(`
                            <h1>Error</h1>
                            <p>Failed to save submission</p>
                        `);
                    }
                    
                    // Confirmation page
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(`
                        <!DOCTYPE html>
                        <html>
                        <head>
                            <title>Thank You!</title>
                            <style>body { font-family: Arial; text-align: center; padding: 50px; }</style>
                        </head>
                        <body>
                            <h1>Thank You, ${name}!</h1>
                            <p>Your submission has been saved.</p>
                            <a href="/contact">Submit another</a>
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
