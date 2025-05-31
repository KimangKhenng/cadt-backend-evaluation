import http from 'http';

const server = http.createServer((req, res) => {
    res.write('Hello, World!');
    res.end();
});

server.listen(4000, () => {
    console.log('Server running on http://localhost:4000');
});