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
        //implement form submission handling
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
        let body = '';
        
        // Listen for data chunks
        req.on('data', chunk => {
            body += chunk.toString();
        });

        // Handle the complete request
        req.on('end', () => {
            try {
                // Parse the form data (name=value format)
                const formData = new URLSearchParams(body);
                const name = formData.get('name');
                
                console.log('Received submission:', name);

                // Append to submissions.txt
                fs.appendFile('submissions.txt', name + '\n', (err) => {
                    if (err) {
                        console.error('Error writing to file:', err);
                        res.writeHead(500, { 'Content-Type': 'text/html' });
                        return res.end('<h1>Internal Server Error</h1>');
                    }

                    // Send success response
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(`
                        <h1>Thank you for your submission!</h1>
                        <p>We received your name: ${name}</p>
                        <a href="/contact">Submit another</a>
                    `);
                });
            } catch (error) {
                console.error('Error processing form data:', error);
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end('Bad Request');
            }
        });

        // Handle potential errors during data transmission
        req.on('error', (error) => {
            console.error('Error receiving data:', error);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
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
