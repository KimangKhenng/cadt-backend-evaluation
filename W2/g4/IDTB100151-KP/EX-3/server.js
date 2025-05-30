// server.js
const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

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

        // Capture the form data
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const parsedData = querystring.parse(body);
            const name = parsedData.name;
        
            if (!name || name.trim() === '') {
                res.writeHead(400, { 'Content-Type': 'text/html' });
                return res.end('<h1>Error: Name field cannot be empty</h1>');
            }
        
            const submission = { name };
        
            // Read the existing submissions.json file
            fs.readFile('submissions.json', 'utf8', (err, data) => {
                let submissions = [];
        
                if (!err && data) {
                    try {
                        submissions = JSON.parse(data); // Parse existing data as an array
                    } catch (parseErr) {
                        console.error('Error parsing JSON:', parseErr);
                    }
                }
        
                submissions.push(submission); // Add the new submission
        
                // Write the updated array back to the file
                fs.writeFile('submissions.json', JSON.stringify(submissions, null, 2), err => {
                    if (err) {
                        console.error('Error writing to file:', err);
                        res.writeHead(500, { 'Content-Type': 'text/html' });
                        return res.end('<h1>Internal Server Error</h1>');
                    }
        
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(`
                      <html>
                        <head><title>Submission Received</title></head>
                        <body>
                          <h1>Thank you for your submission, ${name}!</h1>
                        </body>
                      </html>
                    `);
                });
            });
        });

        return;
    }

    res.writeHead(404, { 'Content-Type': 'text/plain' });
    return res.end('404 Not Found');
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});