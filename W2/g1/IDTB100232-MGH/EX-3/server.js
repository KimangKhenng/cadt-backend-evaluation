// server.js
const http = require('http');
const fs = require('fs');
const queryString = require('querystring');

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
            body += chunk;
        })

        req.on('end', () => {
            const parseData = queryString.parse(body);
            const name = parseData.name;
            console.log('Received Body: ', name);
            fs.appendFile('submissions.txt',`${name}\n`, err =>{
                if(err){
                    console.error('Unable to write to file ', err);
                }
                else{
                    res.writeHead(200, {'Content-type': 'text/plain' });
                    res.end('Write to file successfully');
                }
            } )
        })
        
    }

    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('404 Not Found');
    }
});

server.listen(3001, () => {
    console.log('Server is running at http://localhost:3001');
});
