const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');


  if (req.method === 'GET') {
    switch (req.url) {
      case '/about':
        res.write('About us: at CADT, we love node.js!');
        break;
      case '/contact-us':
        res.write('You can reach us vai email...');
        break;
      case '/products':
        res.write('Buy one get one...');
        break;
      case '/projects':
        res.write('Here are our awesome projects');
        break;
      default:
        res.statusCode = 404;
        res.write('Not Found');
    }
  } else {
    res.statusCode = 405;
    res.write('Method Not Allowed');
  }

  res.end();
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});