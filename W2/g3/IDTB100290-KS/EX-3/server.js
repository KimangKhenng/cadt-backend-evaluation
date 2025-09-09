// server.js
const http = require('http');
const fs = require('fs'); //importing the file system module

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
        console.log("Received Form Submission");

        let body = '';

        // Listen for data events
        req.on('data', (chunk) => {
            console.log("Receiving Data Chunk:", chunk.toString());
            body += chunk;
        });

        // When all data is received
        req.on('end', () => {
            console.log('Complete Form Data Received:', body);
            
            // Parse the form data (application/x-www-form-urlencoded)
            const name = new URLSearchParams(body).get('name');
            console.log("Extracted Name:", name);

            // Validate if the name is not empty
            const nameRegex = /^[A-Za-z]+$/; // Name must contain only alphabetic letters (A-Z, a-z)
            if (!name || !nameRegex.test(name)) {
                console.error("Validation Error: Name must contain only alphabetic letters (A-Z, a-z)");
                res.writeHead(400, { 'Content-Type': 'text/html' });
                return res.end(`
                    <html>
                        <head><title>Error</title></head>
                        <body>
                            <h2>Error: Name must only contain letters (A-Z, a-z).</h2>
                            <a href="/contact">Go Back</a>
                        </body>
                    </html>
                `);
            }

            // Save the name to a text file (without date)
            const submission = `${name.trim()}\n`;
            const submissionsFile = 'submissions.txt';

            // Append the name to the text file
            fs.appendFile(submissionsFile, submission, (err) => {
                if (err) {
                    console.error('Error writing to text file:', err);
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    return res.end('Server Error');
                }

                console.log("Name successfully saved to text file");
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(`
                    <html>
                        <head><title>Submission Successful</title></head>
                        <body>
                            <h2>Thank you, ${name.trim()}! Your submission was saved.</h2>
                            <a href="/contact">Submit Another Name</a>
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
