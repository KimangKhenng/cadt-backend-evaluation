// server.js
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    console.log(`Received ${method} request for ${url}`);

    switch(url) {
        case '/':
            if (method === 'GET') {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('Welcome to the Home Page');
            }
            break;
            
        case '/about':
            if (method === 'GET') {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('About us: at CADT, we love node.js!');
            }
            break;
            
        case '/contact-us':
            if (method === 'GET') {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('You can reach us via email...');
            }
            break;
            
        case '/products':
            if (method === 'GET') {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('Buy one get one...');
            }
            break;
            
        case '/projects':
            if (method === 'GET') {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('Here are our awesome projects');
            }
            break;
            
        case '/contact':
            if (method === 'GET') {
                // Serve the contact form
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(`
                    <form method="POST" action="/contact">
                        <input type="text" name="name" placeholder="Your name" />
                        <button type="submit">Submit</button>
                    </form>
                `);
            } else if (method === 'POST') {
                // Handle the POST request
                let body = '';
                
                // Handle errors in the request
                req.on('error', (err) => {
                    console.error('Request error:', err);
                    res.writeHead(500, { 'Content-Type': 'text/html' });
                    res.end('<h1>500 Server Error</h1>');
                });
                
                // Collect data chunks
                req.on('data', (chunk) => {
                    body += chunk.toString();
                });
                
                // Process the complete request body
                req.on('end', () => {
                    try {
                        // Parse the form data
                        const formData = new URLSearchParams(body);
                        const name = formData.get('name');
                        
                        console.log('Form submission received:', { name });
                        
                        // Validate name
                        if (!name || name.trim() === '') {
                            res.writeHead(400, { 'Content-Type': 'text/html' });
                            res.end(`
                                <h2>Error</h2>
                                <p>Name cannot be empty</p>
                                <a href="/contact">Go back</a>
                            `);
                            return;
                        }
                        
                        // Append to submissions.txt file
                        fs.appendFile('submissions.txt', name + '\n', (err) => {
                            if (err) {
                                console.error('Error writing to file:', err);
                                res.writeHead(500, { 'Content-Type': 'text/html' });
                                res.end(`
                                    <h2>Server Error</h2>
                                    <p>Could not save your submission.</p>
                                    <a href="/contact">Try again</a>
                                `);
                                return;
                            }
                            
                            // Send success response
                            res.writeHead(200, { 'Content-Type': 'text/html' });
                            res.end(`
                                <h2>Thank you for your submission!</h2>
                                <p>We received your name: ${name}</p>
                                <a href="/">Return to homepage</a>
                            `);
                        });
                    } catch (error) {
                        console.error('Error processing form data:', error);
                        res.writeHead(500, { 'Content-Type': 'text/html' });
                        res.end('<h1>500 Server Error</h1><p>Could not process form data</p>');
                    }
                });
            } else {
                // Method not allowed
                res.writeHead(405, { 'Content-Type': 'text/plain' });
                res.end('Method Not Allowed');
            }
            break;
            
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
            break;
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});

/*
1. We listen for data and end events when handling POST requests because:
.The request body might be large and is sent in chunks
.The data event fires for each chunk received
.The end event fires when all chunks have been received

2. If we didn't buffer the body correctly:
.We might process incomplete data
.We could miss parts of the submission
.The parsing would likely fail or give incorrect results

3.The format of form submissions with the default browser form POST is application/x-www-form-urlencoded, which looks like: name=John&email=john@example.com

4.We use fs.appendFile instead of fs.writeFile because:
.appendFile adds to the existing file content
.writeFile would overwrite the entire file each time
.This allows us to keep a log of all submissions

5.To improve this code:
.Store submissions in JSON format for better structure
.Implement proper error handling
.Add validation for form fields
.Use async/await for cleaner asynchronous code
*/
