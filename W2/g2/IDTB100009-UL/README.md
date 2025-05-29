Exercise 1

Q1: What error message do you see in the terminal when you access http://localhost:3000? What line of code causes it?

server.js ln 57-59
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

Q2: Q2 – What is the purpose of res.write() and how is it different from res.end()?

Key differences:

1. Multiple vs Single: res.write() allows multiple writes, res.end() is called once
2. Connection: res.write() keeps connection open, res.end() closes it
3. Completion: res.end() is mandatory to complete response, res.write() is optional
4. Use cases: res.write() is good for streaming/chunked data, res.end() for simple responses

Q3 – What do you think will happen if res.end() is not called at all?

Server is always open and waiting for response eventually getting memory leaked server keep accumulating open connections, memory usage grow evenutally crashing the server.

Q4 – Why do we use http.createServer() instead of just calling a function directly?

http.createServer() is used because it's specifically designed to handle HTTP protocols and create a proper web server

Q5 – How can the server be made more resilient to such errors during development?

A Node.js server can be made more resilient during development by implementing try-catch blocks, global error handlers, using development tools like nodemon for auto-restart, adding proper logging mechanisms, and implementing request timeouts and graceful shutdown procedures.

Exercise 2

1.	What happens when you visit a URL that doesn’t match any of the three defined?
Return as 404 not found as default
2.	Why do we check both the req.url and req.method?
We check both req.url and req.method because the same URL endpoint can handle different operations based on the HTTP method - like how "/contact" with GET shows a form while POST handles form submission. This follows REST principles where methods define the action (GET reads, POST creates, PUT updates, DELETE removes) even when targeting the same resource URL.

3.	What MIME type (Content-Type) do you set when returning HTML instead of plain text?
When returning HTML instead of plain text, you set the MIME type to 'text/html' in the Content-Type header
4.	How might this routing logic become harder to manage as routes grow?

As routes grow, manual routing becomes harder to manage because you need to handle more complex URL patterns, nested routes, route parameters, middleware, authentication, and HTTP methods - all within a single switch/if-else block. This leads to messy, hard-to-maintain "spaghetti code" that frameworks like Express solve with organized routing structures.

5.	What benefits might a framework offer to simplify this logic?

A framework simplifies routing by providing organized route definitions, middleware support, and built-in features that would be complex to implement manually.