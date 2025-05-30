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

        // Listen for data events to capture the request body
        req.on('data', (chunk) => {
            body += chunk.toString(); // Append the chunk to the body
        });

        // Listen for the end event to process the complete body
        req.on('end', () => {
            // Parse the URL-encoded form data
            const parsedData = new URLSearchParams(body);
            const name = parsedData.get('name');

            // Validate that the name field is not empty
            if (!name) {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                return res.end('Name field is required.');
            }

            console.log(`Received submission: ${name}`);
            fs.appendFile('submissions.txt', `${name}\n`, (err) => {
                if (err) {
                    console.error('Error writing to file:', err);
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    return res.end('Internal Server Error');
                }

                // Send a success response
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(`
                  <html>
                    <head><title>Submission Received</title></head>
                    <body>
                      <h1>Thank you for your submission, ${name}!</h1>
                      <a href="/contact">Go back</a>
                    </body>
                  </html>
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
