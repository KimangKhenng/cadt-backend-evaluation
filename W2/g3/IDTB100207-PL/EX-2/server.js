
const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  
  console.log(`Received ${method} request for ${url}`);
 
  switch(true) {
    case (url === '/' && method === 'GET'):
      res.writeHead(200, { 'Content-Type': 'text/html' });
      return res.end(`
        <html>
          <head><title>Home</title></head>
          <body>
            <h1>Welcome to the Home Page</h1>
            <p>This is a simple Node.js server.</p>
          </body>
        </html>
      `);
    
    // About route
    case (url === '/about' && method === 'GET'):
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      return res.end('About us: at CADT, we love node.js!');
    
    // Contact us route
    case (url === '/contact-us' && method === 'GET'):
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      return res.end('You can reach us vai email...');
    
    // Products route
    case (url === '/products' && method === 'GET'):
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      return res.end('Buy one get one...');
    
    // Projects route
    case (url === '/projects' && method === 'GET'):
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      return res.end('Here are our awesome projects');
    
    // 404 Not Found for any other routes
    default:
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      return res.end('404 Not Found');
  }
});

server.listen(3001, () => {
  console.log('Server is running at http://localhost:3001');
});