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
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const parsedData = new URLSearchParams(body);
            const name = parsedData.get('name');

            if (!name || name.trim() === '') {
                res.writeHead(400, { 'Content-Type': 'text/html' });
                return res.end(`
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <title>Error - Name Required</title>
                        <style>
                            body { 
                                font-family: Arial, sans-serif; 
                                background: #f5f5f5; 
                                padding: 20px; 
                            }
                            .container { 
                                background: #fff; 
                                padding: 20px; 
                                border-radius: 5px;
                                box-shadow: 0 2px 5px rgba(0,0,0,0.1); 
                            }
                        </style>
                    </head>
                    <body>
                      <div class="container">
                        <h1>Error</h1>
                        <p>You need to input your name</p>
                      </div>
                    </body>
                    </html>
                `);
            }

            console.log(`Received name: ${name}`);


            fs.readFile('submissions.txt', 'utf8', (err, data) => {
                let submissions = [];

                if (!err && data) {
                    try {
                        submissions = JSON.parse(data);
                        if (!Array.isArray(submissions)) submissions = [];
                    } catch {
                        submissions = [];
                    }
                }

                submissions.push({ name });

                fs.writeFile('submissions.txt', JSON.stringify(submissions, null, 2), (err) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' });
                        return res.end('Failed to save submission.');
                    }

                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(`
                        <!DOCTYPE html>
                        <html lang="en">
                        <head>
                          <meta charset="UTF-8">
                          <title>Submission Successful</title>
                          <style>
                                body { 
                                    font-family: Arial, sans-serif; 
                                    background: #f5f5f5; 
                                    padding: 20px; 
                                }
                                .container { 
                                    background: #fff; 
                                    padding: 20px; 
                                    border-radius: 5px;
                                    box-shadow: 0 2px 5px rgba(0,0,0,0.1); 
                                }
                          </style>
                        </head>
                        <body>
                            <div class="container">
                                <h1>Hello, ${name}</h1>
                                <p>Your name was saved successfully!</p>
                            </div>
                        </body>
                        </html>
                    `);
                });
            });
        });

        return;
    }
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
