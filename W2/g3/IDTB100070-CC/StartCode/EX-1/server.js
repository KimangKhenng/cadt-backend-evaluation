// server.js
const http = require('http');
const server = http.createServer((req, res) => {
res.write('Hello, World!');
return res.end();
});
server.listen(3000, () => {
console.log('Server running on http://localhost:3000');
});

// Q1 – What error message do you see in the terminal when you access
// http://localhost:3000? What line of code causes it?
// A1- the error message is SyntaxError: Invalid or unexpected token cause from the res.end();  is wrong spelling in line 5

// Q2 – What is the purpose of res.write() and how is it different from res.end()?
// res.write() use to  send  data to the client but  it doesn't close the connection, while res.end() is used to signal that the response is complete and close the connection.

// Q3 – What do you think will happen if res.end() is not called at all?
//  i think the server will continue to wait for more data and the client will not receive a respone cause the browser will be loadding forever
// Q4 – Why do we use http.createServer() instead of just calling a function directly?
// http.createServer() is used to create an HTTP server that listens for incoming requests and handles them asynchronously. It allows us to define a callback function that will be executed
// Q5 – How can the server be made more resilient to such errors during development?
//  use try-catch block to handle errors or use nodemon  to automatically restart the server everything we change the code