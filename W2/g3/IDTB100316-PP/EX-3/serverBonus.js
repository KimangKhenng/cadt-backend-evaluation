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
            const parsed = {};
            const pairs = body.split('&');
            for (const pair of pairs) {
                const [key, value] = pair.split('=');
                parsed[decodeURIComponent(key)] = decodeURIComponent(value.replace(/\+/g, ' '));
            }

            const name = parsed.name || '';

            console.log(`Received name: ${name}`);

            if (!name.trim()) {
                res.writeHead(400, { 'Content-Type': 'text/html' });
                return res.end(`
                    <p>Error: Name cannot be empty</p>
                    <a href="/contact">Go back</a>
                `);
            }

            const filePath = 'submissions.json';
            let data = [];

            if (fs.existsSync(filePath)) {
                try {
                    const fileContent = fs.readFileSync(filePath, 'utf8');
                    data = JSON.parse(fileContent);
                } catch (err) {
                    console.error('Error reading JSON file:', err);
                }
            }

            data.push({ name });

            fs.writeFile(filePath, JSON.stringify(data, null, 2), err => {
                if (err) {
                    console.error(err);
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    return res.end('Internal Server Error');
                }

                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(`
                    <h1>Thank you, ${name}!</h1>
                    <p>Your name has been saved successfully.</p>
                    <a href="/contact">Back to form</a>
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
