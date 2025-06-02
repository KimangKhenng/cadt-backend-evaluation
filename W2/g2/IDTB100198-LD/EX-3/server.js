const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

const SUBMISSIONS_FILE = 'submissions.json';

function readSubmissions() {
    try {
        if (fs.existsSync(SUBMISSIONS_FILE)) {
            const content = fs.readFileSync(SUBMISSIONS_FILE, 'utf-8');
            return JSON.parse(content);
        }
    } catch (err) {
        console.error('Error reading submissions.json:', err);
    }
    return [];
}

function saveSubmission(entry) {
    const submissions = readSubmissions();
    submissions.push(entry);
    try {
        fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2));
    } catch (err) {
        console.error('Error writing to submissions.json:', err);
    }
}

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
            <input type="text" name="name" placeholder="Your name" required />
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
            const parsedData = querystring.parse(body);
            const name = parsedData.name && parsedData.name.trim();

            if (!name) {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                return res.end('Error: Name is required.');
            }

            console.log(`Form submission received: ${name}`);

            fs.appendFile('submissions.txt', `${name}\n`, err => {
                if (err) console.error('Error writing to text file:', err);
            });

            const jsonEntry = {
                name: name,
                timestamp: new Date().toISOString()
            };
            saveSubmission(jsonEntry);

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`
              <html>
                <head><title>Submission Received</title></head>
                <body>
                  <h1>Thank you, ${name}!</h1>
                  <p>Your name has been recorded.</p>
                  <a href="/contact">Submit another name</a>
                </body>
              </html>
            `);
        });

        return;
    }

    if (url === '/submissions' && method === 'GET') {
        const submissions = readSubmissions();

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
        <html>
            <head><title>All Submissions</title></head>
            <body>
                <h1>Submissions</h1>
                <ul>
                    ${submissions.map(entry => `<li>${entry.name} - ${entry.timestamp}</li>`).join('')}
                </ul>
                <a href="/contact">Back to Contact Form</a>
            </body>
        </html>
        `);
        return;
    }

    // 404 fallback
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});