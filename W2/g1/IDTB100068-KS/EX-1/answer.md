# Exercise 01: Review and Analyze

## Question 01  
**What error message do you see in the terminal when you access `http://localhost:3000`? What line of code causes it?**

When we access `http://localhost:3000`, the error message that shows in the terminal is return res.endd(). TypeError : res.endd() is not the function
The line of code causes is

```bash
return res.endd();
```
Here are the error message that show in the terminal:

```bash
return res.endd();
TypeError: res.endd is not a function
    at Server.<anonymous> (D:\year_02\term_03\Backend Development\Lab02_Week02\StartCode\EX-1\server.js:4:13)
    at Server.emit (node:events:524:28)
    at parserOnIncoming (node:_http_server:1153:12)
    at HTTPParser.parserOnHeadersComplete (node:_http_common:117:17)

```

--- 

## Question 02  
**What is the purpose of `res.write()` and how is it different from `res.end()`?**

- `res.write()` is used to send chunks of the response body to the client. It is useful when we want to send multiple parts of the response.
- However, it does **not** end the response. The connection remains open until `res.end()` is called.
- `res.end()` is used to signal that all of the response headers and body have been sent, and the request is complete.

---

## Question 03  
**What do you think will happen if `res.end()` is not called at all?**

If `res.end()` is not called, the response will hang. This means:
- The server will not finish sending the response.
- The browser (or any client) will keep waiting for the response to end.
- Eventually, the client may timeout or keep loading indefinitely.
- In Node.js (when using the `http` module), the server requires `res.end()` to know that you’re done sending data.

---

## Question 04  
**Why do we use `http.createServer()` instead of just calling a function directly?**

We use `http.createServer()` because:
- It sets up a real web server that listens for HTTP requests.
- It allows you to define how to respond to those requests using a callback function with `req` and `res` parameters.
- If you call a function directly without `http.createServer()`, no actual server is running, so there's no way to handle browser requests.
- `http.createServer()` bridges your code and the network, enabling web communication.

---

## Question 05  
**How can the server be made more resilient to such errors during development?**

To improve server resilience:
-  **Use try-catch blocks**: Handle errors in risky code to prevent crashes.
-  **Listen for uncaught exceptions**: Catch global errors (use with care).
-  **Validate all input**: Check data from users before using it.
-  **Avoid blocking the event loop**: Use asynchronous code to keep the server responsive (e.g., use `fs.readFile` instead of `fs.readFileSync`).
-  **Use development tools like Nodemon**: Automatically restarts the server on crashes or code changes.
-  **Log errors**: Use `console.log()`, `winston`, or `debug` to capture and analyze errors for better debugging.

---