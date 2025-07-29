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
            <input type="text" name="name" placeholder="Your name" required />
            <button type="submit">Submit</button>
          </form>
        `);
        return;
    }

    if (url === '/contact' && method === 'POST') {
        // Implement form submission handling and save it in json format
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const name = new URLSearchParams(parsedBody).get('name');
            // Save the name to a file
            fs.appendFile('submissions.json', JSON.stringify({ name }) + '\n', err => {
                if (err) {
                    console.error('Error writing to file', err);
                } else {
                    console.log('Name saved to submissions.json');
                }
            });
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`
                <html>
                    <head><title>Thank You</title></head>
                    <body>
                        <h1>Thank you for your submission, ${name}!</h1>
                    </body>
                </html>
            `);
        });
        return;

        
        // res.writeHead(200, { 'Content-Type': 'text/plain' });
        // let body = '';
        // req.on('data', chunk => {
        //     body += chunk.toString(); // Convert Buffer to string
        // });
        // req.on('end', () => {
        //     const name = new URLSearchParams(body).get('name');
            // Save the name to a file
            // fs.appendFile('submissions.txt', `Name: ${name}\n`, err => {
            //     if (err) {
            //         console.error('Error writing to file', err);
            //     } else {
            //         console.log('Name saved to submission.txt');
            //     }
            // })
            // console.log(`Received name: ${name}`);
            // res.end(`Thank you for your submissions, ${name}!`);
        // });
        // return;
    }

    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('404 Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
