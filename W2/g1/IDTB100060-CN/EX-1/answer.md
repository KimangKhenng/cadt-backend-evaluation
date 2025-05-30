# Exercise 1 - Review and Analyze
## Question - 01
**What error message do you see in the terminal when you access http://localhost:3000? What line of code causes it?**

When we access http://localhost:3000 , the error message that shows in the terminal is ‘ TypeError: res.endd is not a function ’.
The line code that causes the error is:
```bash 
return res.endd();
```
- Here’s the error that shows in the terminal:
```bash
return res.endd(); ^ 

TypeError: res.endd is not a function at Server.<anonymous> (/Users/nikachhun/Documents/Year 2/Term_3/Backend-Development/WEEK-02/example/server.js:14:12) at Server.emit (node:events:507:28) at parserOnIncoming (node:_http_server:1153:12) at HTTPParser.parserOnHeadersComplete (node:_http_common:117:17)
```
---

## Question - 02 
**What is the purpose of res.write() and how is it different from res.end()?**

The purpose of res.write() is to send a chunk of the response body to the client before ending the response. res.write() can be called multiple times and the connection stays open; it is not used to end the response. However, the purpose of res.end() is to end the response telling the server that “i am done sending”.

---

## Question - 03
**What do you think will happen if res.end() is not called at all?**

If res.end() is not called at all the response stays open meaning that the server never finishes sending the response and the client or browser will keep waiting forever, showing the loading spinner.

---

## Question - 04 
**Why do we use http.createServer() instead of just calling a function directly?**

We use http.createServer() instead of just calling a function directly since http.createServer() is used to create an actual HTTP server that can listen for incoming requests from the client and send back responses. However, a normal function doesn’t set up a network listener so it can’t handle real web traffic. The normal function does not receive HTTP requests for clients, does not listen on any port and does not connect to the internet or browser.

---

## Question - 05
**How can the server be made more resilient to such errors during development?**

To make server more resilient to such errors during development, we can:
1. **Using try-catch (for synchronous code):** it catches errors in risky operations to prevent them from crashing the server.
2. **Using error handlers (for asynchronous code):** It ensures that if something goes wrong like while reading the file, the error is logged and handled, so the server doesn’t crash.
3. **Graceful Error Handling for HTTP Requests:** Create a default error handler to catch any unhandled errors in your server code and send a proper response back to the client.
4. Use **process-wide error handlers** (uncaughtException, unhandledRejection) to catch unhandled issues.
5. Use **development tools** like nodemon to automatically restart the server which helps during development when you’re testing or debugging.
6. **Log errors** properly for easier debugging and issue tracking.