const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const { url, method } = req;

    // Home page handler (unchanged)
    if (url === '/' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        return res.end('Welcome to the Home Page');
    }

    // Contact form page handler (unchanged)
    if (url === '/contact' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end(`
            <form method="POST" action="/contact">
                <input type="text" name="name" placeholder="Your name" required />
                <button type="submit">Submit</button>
            </form>
        `);
    }

    // Contact form submission handler
    if (url === '/contact' && method === 'POST') {
        let body = '';
        req.on('data', chunk => body += chunk.toString());
        req.on('end', () => {
            const name = new URLSearchParams(body).get('name');
            
            //BONUS: VALIDATION
            if (!name || name.trim() === '') {
                res.writeHead(400, { 'Content-Type': 'text/html' });
                return res.end(`
                    <h1>Error</h1>
                    <p>Name cannot be empty!</p>
                    <a href="/contact">Try again</a>
                `);
            }

            //BONUS: JSON STORAGE
            const newEntry = { 
                name: name, 
                timestamp: new Date().toISOString() // Bonus: Added timestamp
            };

            fs.readFile('submissions.json', 'utf8', (err, data) => {
                const submissions = data ? JSON.parse(data) : [];
                submissions.push(newEntry);
                
                fs.writeFile('submissions.json', JSON.stringify(submissions, null, 2), (err) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/html' });
                        return res.end(`
                            <h1>Error</h1>
                            <p>Failed to save submission</p>
                        `);
                    }
                    
                    //BONUS: CONFIRMATION HTML
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(`
                        <!DOCTYPE html>
                        <html>
                        <head>
                            <title>Thank You</title>
                            <style>
                                body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
                                h1 { color: #4CAF50; }
                                a { color: #2196F3; text-decoration: none; }
                            </style>
                        </head>
                        <body>
                            <h1>Thank You, ${name}!</h1>
                            <p>Your submission has been saved.</p>
                            <a href="/contact">Submit another response</a>
                        </body>
                        </html>
                    `);
                });
            });
        });
        return;
    }

    // 404 handler (unchanged)
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
});

server.listen(3003, () => {
    console.log('Server running at http://localhost:3003');
});