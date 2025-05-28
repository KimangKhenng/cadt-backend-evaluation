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

        req.on('end', () => {
            const parsedBody = new URLSearchParams(body);
            const name = parsedBody.get('name')?.trim();

            if (!name) {
                res.writeHead(400, { 'Content-type': 'text/plain; charset=utf-8' });
                return res.end("Please state your name 🥹");
            }

            // --- txt saving process ---
            fs.appendFile('submissions.txt', name.concat('\n'), err => {
                if (err) {
                    console.error(err);
                    res.writeHead(400, { 'Content-type': 'text/plain' });
                    return res.end('Somthing went wrong. Please try again.');
                }
                console.log('Txt file written successfully');
            });

            // --- JSON saving process ---
            const data = {"Name": name};
            const jsonData = JSON.stringify(data, null, 2);
            fs.writeFile('submissions.json', jsonData, (err) => {
                if (err) {
                    console.error("An error occurred: ", err);
                    res.writeHead(400, { 'Content-type': 'text/plain' });
                    return res.end('Something went wrong. Please try again');
                } else {
                    console.log("JSON file written successfully");
                }
            });

            res.writeHead(200, { 'Content-type': 'text/plain' });
            return res.end(`Thank you ${name}, your response was submitted!`);
        });
    }

    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('404 Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
