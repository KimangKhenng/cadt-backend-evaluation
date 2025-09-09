// server.js
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

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
            body += chunk.toString();
        });

        req.on('end', () => {
            // Parse raw application/x-www-form-urlencoded data from the request body.
            const params = new URLSearchParams(body);
            const name = params.get('name')?.trim();

            // Validate that the name field is not empty before saving.
            if (!name) {
                res.writeHead(400, { 'Content-Type': 'text/html' });
                return res.end(`
                    <html><body>
                        <h2>Submission failed</h2>
                        <p>Name cannot be empty.</p>
                        <a href="/contact">Go back</a>
                    </body></html>
                `);
            }

            // Save submissions in JSON format instead of plain text.
            const submissionsPath = path.join(__dirname, 'submissions.json');
            let submissions = [];

            // Read existing file if it exists
            if (fs.existsSync(submissionsPath)) {
                try {
                    const data = fs.readFileSync(submissionsPath, 'utf-8');
                    submissions = JSON.parse(data);
                } catch (err) {
                    console.error('Error reading existing submissions:', err);
                }
            }

            submissions.push({ name, timestamp: new Date().toISOString() });

            // Write updated data to JSON file
            fs.writeFile(submissionsPath, JSON.stringify(submissions, null, 2), (err) => {
                if (err) {
                    console.error('Failed to write file:', err);
                    res.writeHead(500, { 'Content-Type': 'text/html' });
                    return res.end('<h2>Server Error. Please try again later.</h2>');
                }

                console.log(`Received name: ${name}`);

                // Send a success response to the client (HTML)
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(`
                    <html><body>
                        <h2>Thank you, ${name}!</h2>
                        <p>Your submission has been saved.</p>
                        <a href="/contact">Submit another</a>
                    </body></html>
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
