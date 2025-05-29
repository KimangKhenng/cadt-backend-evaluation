const http = require('http'); 

const server = http.createServer ((req, res) => { 
    const { method, url } = req; 
    if (method === 'GET' && url === '/') { 
        res.writeHead (200, { 'Content-Type': 'text/plain' }); 
        res.end('Welcome to the homepage!'); 
    } else if (method === 'GET' && url === '/contact') { 
        res.writeHead (200, { 'Content-Type': 'text/plain' }); 
        res.end('Contact us at support@example.com.'); 
    } else { 
        res.writeHead (404, { 'Content-Type': 'text/plain' }); 
        res.end('404 Not Found'); 
    } 
}); 
server.listen(3000, () => { 
    console.log('Server listening on port 3000'); 
});