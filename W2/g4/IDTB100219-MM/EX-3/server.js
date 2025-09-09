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
        let body = "";

        // collect data chunk
        req.on('data', chunk => {
            body += chunk.toString();
        });

        // when data is recieved
        req.on('end', () => {
            const parsedData = new URLSearchParams(body);
            const name = parsedData.get('name');

            console.log(`Form submitted with name: ${name}`);

            // check name field
            if(!name || name.trim() === ''){
                res.writeHead(400, {'Content-Type': 'text/html'});
                return res.end(`
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <title>Error - Name Required</title>
                        <style>
                            body { 
                                font-family: Arial; 
                                background:rgb(126, 126, 126);
                                padding: 25px; }
                            .container { 
                                background:rgb(226, 226, 226); 
                                padding: 20px; 
                                border-radius: 5px;
                                box-shadow: 3px 3px 5px rgba(0,0,0,0.1);
                            }
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <h1>Error</h1>
                            <p>Name is required!</p>
                        </div>
                    </body>
                    </html>
                `);
            }
            console.log(`Recieved name: ${name}`);

            // Append name to file
            fs.appendFile('submissions.txt', `${name}\n`, (err) => {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    return res.end('Failed to save data');
                }

                res.writeHead(200, {'Content-Type': 'text/html'});
                return res.end(`
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <title>Submission Successful</title>
                        <style>
                            body { 
                                font-family: Arial; 
                                background: rgb(126, 126, 126);
                                padding: 25px; 
                            }
                            .container { 
                                background: rgb(226, 226, 226); 
                                padding: 20px; 
                                border-radius: 5px;
                                box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
                            }
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <h1>Hello, ${name}</h1>
                            <p>Your name has been saved successfully!</p>
                        </div>
                    </body>
                    </html>
                `);
            });
        });
        return;
    }

    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('404 Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
