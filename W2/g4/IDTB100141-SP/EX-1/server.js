const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Hello, World!');
    // return res.endd();
    return res.end();
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

// Q1 - What error message do you see in the terminal when you access http://localhost:3000? What line of code causes it ?
// -> TypeError: res.endd is not a function. Line 5 causes the error with 'endd'

// Q2 - What is the purpoe of res.write() and how is it different from res.end() ?
// -> In this code res.write() gives a response in this case Hello World.
// res.end() is for closing the response.


// Q3 - What do you think will happen if res.end() is not called at all ?
// -> The write response will not come out thus giving an infinite loading blank page.

// Q4 - Why do we use http.createServer() instead of calling a function directly ?
// -> I would assume it is easier to use a built in function that is proven to work compared to making our own function.

// Q5 - How can the server be made more resilient to such errors during development ?
// -> Constant running along the way, instead of writing every and running all at once.