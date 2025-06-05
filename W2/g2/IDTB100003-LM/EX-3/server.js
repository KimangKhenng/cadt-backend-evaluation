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
            <input type="text" name="name" placeholder="Your name" required />
            <button type="submit">Submit</button>
          </form>
        `);
        return;
    }

    if (url === '/contact' && method === 'POST') {
        let body = '';

        // Collect data from the request body
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            // Parse application/x-www-form-urlencoded data
            const parsedData = new URLSearchParams(body);
            const name = parsedData.get('name');

            if (name && name.trim() !== '') {
                // Prepare the data in JSON format
                const submission = { name: name.trim(), timestamp: new Date().toISOString() };
                const submissionString = JSON.stringify(submission);

                // Write the JSON data to submissions.json
                fs.appendFile('submissions.json', submissionString + '\n', err => {
                    if (err) {
                        console.error('Error writing to file:', err);
                        res.writeHead(500, { 'Content-Type': 'text/plain' });
                        return res.end('Internal Server Error');
                    }

                    // Send success response to the client
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(`
                        <html>
                            <head><title>Submission Successful</title></head>
                            <body>
                                <h1>Thank you for your submission, ${name}!</h1>
                                <p>Your submission has been saved successfully.</p>
                                <a href="/contact">Go back to the contact form</a>
                            </body>
                        </html>
                    `);
                });
            } else {
                res.writeHead(400, { 'Content-Type': 'text/html' });
                res.end(`
                    <html>
                        <head><title>Bad Request</title></head>
                        <body>
                            <h1>Bad Request</h1>
                            <p>The name field is required and cannot be empty.</p>
                            <a href="/contact">Go back to the contact form</a>
                        </body>
                    </html>
                `);
            }
        });

        return;
    }

    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('404 Not Found');
    }
});

server.listen(3002, () => {
    console.log('Server is running at http://localhost:3002');
});
