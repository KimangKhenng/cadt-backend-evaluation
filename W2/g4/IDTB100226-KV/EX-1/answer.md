# Exercise 1

## Q1 – What error message do you see in the terminal when you access http://localhost:3000? What line of code causes it?

**Error message:** Unable to connect to remote server

**Cause:** This is caused by the line: `return res.endd();` because of the type error which should be `return res.end();`

---

## Q2 – What is the purpose of res.write() and how is it different from res.end()?

- The purpose of `res.write()` is to send a chunk of response body to the client through HTTP request.
- `res.end()` is considered as a signal to indicate that it is the end of sending response or can be the final chunk that needs to be sent.

---

## Q3 – What do you think will happen if res.end() is not called at all?

- If `res.end()` is not called at all, the terminal will show “Reading web response” which means that the HTTP response remains open, and the client side will be waiting for the server to signal that the response is completed.

---

## Q4 – Why do we use http.createServer() instead of just calling a function directly?

There are a few reasons why we use `http.createServer()` instead of just calling a function directly:

- `http.createServer()` allows to initialize HTTP server instance which can listen for incoming requests within a specific port.
- It also provides an infrastructure which can handle requests and responses.
- By calling functions directly, we cannot handle requests and responses properly.

---

## Q5 – How can the server be made more resilient to such errors during development?

- Create a centralized error handling middleware to manage errors consistently across your application.
- Wrap potentially error-prone code in try-catch blocks to catch and handle exceptions.
- Ensure your server can shut down gracefully in case of critical errors, freeing up resources and preventing data corruption.
- Implement comprehensive error logging to capture and analyze errors for debugging and monitoring.
- Validate user inputs to prevent errors caused by invalid data.