const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Hello World!');
    return res.end(); // Error: Change from res.endd to res.end
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});