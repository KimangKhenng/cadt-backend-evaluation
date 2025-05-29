const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const path = require('path');

const CONTACT_FILE = path.join(__dirname, 'contact.json');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    console.log(`Received ${method} request for ${url}`);

    // Home route
    if (url === '/' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        return res.end('Welcome to the Home Page');
    }

    // Contact form page
    if (url === '/contact' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end(`
            <html>
                <head><title>Contact Us</title></head>
                <body>
                    <form method="POST" action="/contact">
                        <input type="text" name="name" placeholder="Your name" required />
                        <button type="submit">Submit</button>
                    </form>
                </body>
            </html>
        `);
    }

    // Form submission handler
    if (url === '/contact' && method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const parsedBody = querystring.parse(body);
            const name = parsedBody.name?.trim();

            if (!name) {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                return res.end('Name is required.');
            }

            // Read existing data from contact.json or initialize empty array
            let existingData = [];
            if (fs.existsSync(CONTACT_FILE)) {
                const raw = fs.readFileSync(CONTACT_FILE, 'utf-8');
                try {
                    existingData = JSON.parse(raw);
                } catch (e) {
                    console.error('Error parsing JSON:', e);
                }
            }

            // Add new entry
            existingData.push({ name });

            // Save back to contact.json
            fs.writeFile(CONTACT_FILE, JSON.stringify(existingData, null, 2), (err) => {
                if (err) {
                    console.error('Error saving file:', err);
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    return res.end('Internal Server Error');
                }

                // Send HTML confirmation
                res.writeHead(200, { 'Content-Type': 'text/html' });
                return res.end(`
                    <html>
                        <head><title>Thank You</title></head>
                        <body>
                            <h2>Thank you for your submission, ${name}!</h2>
                            <a href="/contact">Submit another</a>
                        </body>
                    </html>
                `);
            });
        });

        return;
    }

    // Fallback route
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    return res.end('404 Not Found');
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
