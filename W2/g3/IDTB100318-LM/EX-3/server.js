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
        req.on('data', chunk => {
            body += chunk.toString(); 
        });
        const data = {};
        req.on('end', () => {
            body.split('&').forEach(pair => {
                const [key, value] = pair.split('=');
                data[key] = decodeURIComponent(value.replace(/\+/g, ' '));
            });

    // Check if the name is valid (non-empty, only letters, and spaces)
            const name = data['name'];
            if (!name || !/^[a-zA-Z\s]+$/.test(name)) {
                res.writeHead(400, { 'Content-Type': 'text/html' });
                return res.end(
                    `<html>
                        <head><title>Invalid Input</title></head>
                        <script>
                            alert('Invalid name, Please enter a valid name!');
                            window.location.href = '/contact';
                        </script>
                    </html>`
                );
            }
    // Log the form submission
            console.log(`Received form submission: ${name}`);

    // Save the form submission to a file
            var jsonData = JSON.stringify(data); // Convert to JSON format
            fs.appendFile('submissions.txt', `${jsonData}\n`, (err) => {
                if (err) {
                    console.error('Error writing to file', err);
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    return res.end('Internal Server Error');
                }
                console.log('Form submission saved to file');
            });
    // Send a response back to the client
            res.writeHead(200, { 'Content-Type': 'text/html' });
            return res.end(`
                <html>
                <head><title>Form Submitted</title></head>
                <script>
                    alert('Form submitted successfully!');
                    window.location.href = '/contact';
                </script>
                </html>    
            `);
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
