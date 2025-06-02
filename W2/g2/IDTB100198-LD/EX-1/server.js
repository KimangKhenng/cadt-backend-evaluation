const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Hello world!');
    return res.end();
    // return res.endd();
});

server.listen(3033, () => {
    console.log('server is running on http://localhost:3033');
});