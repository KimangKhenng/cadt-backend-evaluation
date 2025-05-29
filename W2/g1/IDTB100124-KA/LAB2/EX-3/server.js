// server.js
//const http = require('http');
import http from "http";
import fs from "fs";


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
    
    let body = "";
    if (url === '/contact' && method === 'POST') {
    let body = "";

    req.on("data", chunk => {
        body += chunk;
    });

    req.on("end", () => {
        console.log("Received data from Client:", body);

        const filePath = "submissions.txt";

        fs.writeFileSync(filePath, body);

        const fileContent = fs.readFileSync(filePath, "utf8");
        console.log("FileContent:", fileContent);

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("Form submitted successfully");
    });

    return; // Important to avoid falling into the 404 response
}


    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('404 Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
