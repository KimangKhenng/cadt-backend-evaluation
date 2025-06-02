const http = require('http');
const fs = require('fs').promises;
const qs = require('querystring');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    console.log(`Received ${method} request for ${url}`);

    try {
        if (url === '/' && method === 'GET') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            return res.end('Welcome to the Home Page');
        }

        if (url === '/contact' && method === 'GET') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <title>Contact Form</title>
                </head>
                <body>
                    <h1>Contact Us</h1>
                    <form method="POST" action="/contact">
                        <input type="text" name="name" placeholder="Your name" required />
                        <button type="submit">Submit</button>
                    </form>
                </body>
                </html>
            `);
            return;
        }

        if (url === '/contact' && method === 'POST') {
            let body = '';
            // Collect data chunks
            req.on('data', (chunk) => {
                body += chunk.toString();
            });
            req.on('end', async () => {
                try {
                    const formData = qs.parse(body);
                    const name = formData.name ? formData.name.trim() : '';
                    if (!name) {
                        res.writeHead(400, { 'Content-Type': 'text/html' });
                        res.end(`
                            <!DOCTYPE html>
                            <html lang="en">
                            <head>
                                <meta charset="UTF-8">
                                <title>Error</title>
                            </head>
                            <body>
                                <h1>Error</h1>
                                <p>Name is required.</p>
                                <a href="/contact">Back to form</a>
                            </body>
                            </html>
                        `);
                        return;
                    }
                    console.log('Form submission:', name);
                    const submission = {
                        name,
                        timestamp: new Date().toISOString(),
                    };
                    await fs.appendFile('submissions.txt', JSON.stringify(submission) + '\n');
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(`
                        <!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <title>Success</title>
                        </head>
                        <body>
                            <h1>Success</h1>
                            <p>Thank you, ${name}, for your submission!</p>
                            <a href="/contact">Submit another</a>
                        </body>
                        </html>
                    `);
                } catch (err) {
                    console.error('Error processing POST:', err);
                    res.writeHead(500, { 'Content-Type': 'text/html' });
                    res.end(`
                        <!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <title>Server Error</title>
                        </head>
                        <body>
                            <h1>Server Error</h1>
                            <p>Something went wrong. Please try again.</p>
                            <a href="/contact">Back to form</a>
                        </body>
                        </html>
                    `);
                }
            });
            return;
        }
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('404 Not Found');
    } catch (err) {
        console.error('Server error:', err);
        res.writeHead(500, { 'Content-Type': 'text/html' });
        return res.end(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Server Error</title>
            </head>
            <body>
                <h1>Server Error</h1>
                <p>An unexpected error occurred.</p>
            </body>
            </html>
        `);
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error('Port 3000 in use, please try another port.');
    } else {
        console.error('Server startup error:', err);
    }
});