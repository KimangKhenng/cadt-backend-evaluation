const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/contact') {
        if (req.method === 'GET') {
            // Display the contact form
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(`
                <form method="POST" action="/contact">
                    <input type="text" name="name" placeholder="Enter your name">
                    <button type="submit">Submit</button>
                </form>
            `);
        }
        else if (req.method === 'POST') {
            // Handle form submission
            let body = '';
            
            // Listen for data chunks
            req.on('data', chunk => {
                body += chunk;
            });

            // Process the complete request body
            req.on('end', () => {
                const parseData = querystring.parse(body);
                const name = parseData.name;
                console.log('Form data received:', name); // Log to console
                
                // Append to submissions.txt
                fs.appendFile('../STARTCODE/EX-3/submissions.txt', name + '\n', (err) => {
                    if (err) {
                        console.error('Error writing to file:', err);
                        res.writeHead(500);
                        res.end('Error saving submission');
                        return;
                    }
                    
                    // Send success response
                    res.writeHead(200, {'Content-Type': 'text/plain'});
                    res.end('Form submitted successfully!');
                });
            });
        }
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/contact`);
});