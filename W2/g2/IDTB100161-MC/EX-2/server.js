const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    switch (req.url) {
      case '/about':
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('About us: at CADT, we love node.js!');
        break;

      case '/contact-us':
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('You can reach us via email…');
        break;

      case '/products':
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Buy one get one…');
        break;

      case '/projects':
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Here are our awesome projects');
        break;

      default:
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
  }
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});