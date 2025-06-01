
# Answers to HTTP Server Questions

## Q1 – What error message do you see in the terminal when you access http://localhost:3000? What line of code causes it?
**Answer**: TypeError: res.endd is not a function (Line 4)

## Q2 – What is the purpose of res.write() and how is it different from res.end()?
**Answer**: `res.write()` is used to send a chunk of response message and it’s different from `res.end()` by `res.write()` can be used multiple times but `res.end()` can only be used once.

## Q3 – What do you think will happen if res.end() is not called at all?
**Answer**: If `res.end()` is not called, then the request handler cannot be called and the HTTP response will not be finalized.

## Q4 – Why do we use http.createServer() instead of just calling a function directly?
**Answer**: We use `http.createServer()` instead of just calling a function directly because it is used in Node.js to create an HTTP server instance and it serves multiple crucial purposes like creating a server object, handling networking, and event-driven request handling.

## Q5 – How can the server be made more resilient to such errors during development?
**Answer**: The server can be made more resilient to such errors during development by using error handlers like try-catch, global error listeners, linting/TypeScript, logging, frameworks like Express, automated testing, nodemon, and pre-run validation to catch and recover from errors like `res.endd()`.
