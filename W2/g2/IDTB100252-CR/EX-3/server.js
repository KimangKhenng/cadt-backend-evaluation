// server.js
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
            body += chunk.toString(); // Convert the chunk to a string
        });
        // When all data is received
        req.on('end', ()=>{
            const parsedData = querystring.parse(body);
            const name = parsedData.name;
            console.log('Received name' , name);

            //write to file
            fs.appendFile('submissions.txt', name + '\n', (err)=>{
                if(err){
                    console.error('Error writing to file', err);
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    return res.end('Internal Server Error');
                }
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(`<h1>Thank you ${name} for your submission</h1>`);
            });
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
