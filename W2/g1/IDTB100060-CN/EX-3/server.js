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
            body += chunk;
        });
        req.on('end', () => {

            const parsedData = new URLSearchParams(body);
            const name = parsedData.get('name');
            console.log('Form submission: ', name);

            if(name !== '') {
                const newSubmission = {
                    name: name
                };


                fs.appendFile('submissions.txt', `${name}\n`, (err) => {
                    if (err) {
                      res.writeHead(500, { 'Content-Type': 'text/plain' });
                      return res.end('Error saving submission.');
                    }
            
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(`
                        <html>
                            <head><title>Thank You</title></head>
                            <body>
                                <h1>Thank you, ${name}!</h1>
                                <p>Your form was submitted successfully.</p>
                            </body>
                        </html>    
                    `);
                });


                // read from the existing file and store it into array in order to add new submission
                fs.readFile('submissions.json', 'utf8', (err, data) => {
                    let submissions = [];
                    if (!err) {
                        try {
                            submissions = JSON.parse(data);
                        } catch {
                            console.error('Invalid JSON in file, starting fresh.');
                        }
                    }

                    submissions.push(newSubmission);

                    fs.writeFile('submissions.json', JSON.stringify(submissions, null, 2), (err) => {
                        if (err) {
                            res.writeHead(500, { 'Content-Type': 'text/plain' });
                            return res.end('Error saving submission.');
                        }
            
                        res.writeHead(200, { 'Content-Type': 'text/html' });
                        return res.end(`
                            <html>
                                <head><title>Thank You</title></head>
                                <body>
                                    <h1>Thank you, ${name}!</h1>
                                    <p>Your form was submitted successfully.</p>
                                </body>
                            </html>
                        `);
                    })
                })

                

            } else {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                return res.end('write sth');
            }

            
        })
    }

    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('404 Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
