//server.js
const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Hello World!');
    return res.end();
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

/*
Q1: The error you'll likely see is that the response never completes. This is because in the example code, res.write() is called but res.end() is commented out with a return before it. The connection stays open indefinitely.
Q2: res.write() sends chunks of data to the client but keeps the connection open. res.end() sends the final data and closes the connection. The key difference is that write() can be called multiple times to stream data, while end() finishes the response.
Q3: If res.end() is not called at all, the connection will remain open indefinitely, causing the browser to continue loading. Eventually, it might time out, but it will not receive a complete response.
Q4: We use http.createServer() instead of calling a function directly because it properly handles the HTTP protocol, creates a proper HTTP server instance with all necessary event listeners, and returns a server object with methods like listen().
Q5: To make the server more resilient during development, you could:

Add error handling with try/catch blocks
Use tools like nodemon for automatic restarts
Implement proper logging
Add timeout handling
*/
