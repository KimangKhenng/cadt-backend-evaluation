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
        return res.end(`
            <html>
                <body>
                    <form method="POST" action="/contact">
                        <input type="text" name="name" placeholder="Your name" required />
                        <button type="submit">Submit</button>
                    </form>
                </body>
            </html>
        `);
    }

    if (url === '/contact' && method === 'POST') {
        let body = '';
        
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const parsedBody = querystring.parse(body);
            const name = parsedBody.name;

            console.log(`Name submitted: ${name}`);

            if (!name) {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                return res.end('Name is required.');
            }

            fs.appendFile('submissions.txt', `Name: ${name}\n`, err => {
                if (err) {
                    console.error('Error writing to file:', err);
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    return res.end('Internal Server Error');
                }

                // Respond with thank you message
                res.writeHead(200, { 'Content-Type': 'text/html' });
                return res.end(`
                    <html>
                        <body>
                            <h2>Thank you for your submission, ${name}!</h2>
                        </body>
                    </html>
                `);
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
