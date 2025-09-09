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
            body += chunk.toString(); // collect incoming data
        });

        req.on('end', () => {
            const parsed = new URLSearchParams(body);
            const name = parsed.get('name');

            if (!name || name.trim() === '') {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                return res.end('Name is required.');
            }

            console.log(`Received submission: ${name}`);

            fs.appendFile('submissions.txt', `${name}\n`, (err) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    return res.end('Failed to save submission.');
                }

                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(`Thank you, ${name}! Your form was submitted.`);
            });

            fs.readFile('submissions.json', 'utf8', (err, data) => {
                const submissions = err ? [] : JSON.parse(data);
    
                // Add the new submission
                submissions.push({ name });
    
                // Write the updated submissions back to the file
                fs.writeFile('submissions.json', JSON.stringify(submissions, null, 2), (err) => {
                    if (err) {
                        console.error('Error writing to file:', err);
                        res.writeHead(500, { 'Content-Type': 'text/plain' });
                        return res.end('Internal Server Error');
                    }
    
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(`
                      <html>
                        <head><title>Submission Successful</title></head>
                        <body>
                          <h1>Thank you, ${name}!</h1>
                          <p>Your submission has been received.</p>
                          <a href="/contact">Go back</a>
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
