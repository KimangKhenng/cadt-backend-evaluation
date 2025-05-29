// server.js

const http = require('http');
const fs = require('fs/promises');
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
        }
       
        );
        req.on ('end', async () => {
            console.log('Form submitted:', body);
            try {
                await fs.appendFile('submissions.txt', body + '\n');
                console.log('Form data saved to submissions.txt');
                // res.writeHead(200, { 'Content-Type': 'text/plain' });
                console.log('Redirecting to /contact');
                res.writeHead(302, { Location: '/contact' });
                res.end('Form submitted successfully');
                
            }catch (err) {
                console.error('Error writing to file', err);
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                return res.end('Internal Server Error');
            }
            return ;
           
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

// 1. Why do we listen for data and end events when handling POST?
// We listen for data events to collect the chunks of data sent in the request body, and we listen for the end event to know when all data has been received.
// 2. What would happen if we didn’t buffer the body correctly?
// if we didn't we might not get the full data or fail to process it correctly 
// 3. What is the format of form submissions when using the default browser form POST?
// application/x-www-form-urlencoded
// 4. Why do we use fs.appendFile instead of fs.writeFile?
// because fs.writeFile overwrites the file and fs.appendFile appends the data in the file 
// 5. How could this be improved or made more secure?
// maybe we can use a database to store the data . 

