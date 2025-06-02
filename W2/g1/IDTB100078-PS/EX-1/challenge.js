const http = require('http');
const server = http.createServer((req, res) => {

    const {method,url} = req;

    if (method === 'GET' && url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Welcome to the homepage!');
    } else if (method === 'GET' && url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('This is the about page!');
    } else if(method === 'POST' && url === '/submit') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('404 not found')
    } else if (method === 'POST' && url === '/contact') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Contact us at support@example.com');



    }})
