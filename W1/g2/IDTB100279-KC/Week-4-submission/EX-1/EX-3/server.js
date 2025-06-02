/* // server.js
const http = require('http');
const path = require('path');
const { StringDecoder } = require('string_decoder');
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
        const decoder = new StringDecoder('utf-8');

        req.on('data', chunk => {
            body += decoder.write(chunk);
        });

        req.on('end', () => {
            body += decoder.end();

            const parsedData = new URLSearchParams(body);
            const name = parsedData.get('name');

            const submission = `Name: ${name}\n`;

            fs.appendFile(path.join(__dirname, 'submissions.txt'), submission, err => {
                if (err) throw err;
                console.log('Data saved to submissions.txt');
            
                // Delay the response by 3 seconds
                setTimeout(() => {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(`
                        <html>
                            <head>
                                <meta charset="UTF-8" />
                                <title>Thank You</title>
                                <script>
                                    setTimeout(() => {
                                        window.location.href = '/contact';
                                    }, 3000); // 3 seconds delay
                                </script>
                            </head>
                            <body>
                                <h1>Thank you for your submission, ${name}!</h1>
                                <p>Your data has been saved. You will be redirected shortly...</p>
                            </body>
                        </html>
                    `);
                }, 0); // No server-side delay needed
                
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
 */

// server.js
import express from 'express';
import path from 'path';
import fs from 'fs';

const app = express();

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Home Page
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page');
});

// Contact Form - GET
app.get('/contact', (req, res) => {
    res.send(`
        <form method="POST" action="/contact">
            <input type="text" name="name" placeholder="Your name" required />
            <button type="submit">Submit</button>
        </form>
    `);
});

// Contact Form - POST
app.post('/contact', (req, res) => {
    const name = req.body.name;
    const submission = `Name: ${name}\n`;

    // Save submission to file
    fs.appendFile(path.join(__dirname, 'submissions.txt'), submission, err => {
        if (err) {
            console.error('Error saving submission:', err);
            return res.status(500).send('Internal Server Error');
        }

        console.log('Data saved to submissions.txt');
        
        // Respond with a thank you page
        res.send(`
            <html>
                <head>
                    <meta charset="UTF-8" />
                    <title>Thank You</title>
                    <script>
                        setTimeout(() => {
                            window.location.href = '/contact';
                        }, 3000); // 3 seconds delay
                    </script>
                </head>
                <body>
                    <h1>Thank you for your submission, ${name}!</h1>
                    <p>Your data has been saved. You will be redirected shortly...</p>
                </body>
            </html>
        `);
    });
});

// 404 Not Found - Catch-All Route
app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

// Start Server
app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});

