1. What error message do you see in the terminal when you access http://localhost:3000? What line of code causes it?
➢ The message is TypeError: res.endd is not a function. The type error is on line 5.

2. What is the purpose of res.write() and how is it different from res.end()?
➢ Res.write() use to send chunks of data while res.end() finalizes and sends the response.

3. What do you think will happen if res.end() is not called at all?
➢ If res.end() is not called at all, the server will run indefinitely and browser will not
display the response and eventually timed out.

4. Why do we use http.createServer() instead of just calling a function directly?
➢ We use http.createServer() instead of just calling a function directly because it wrap the
request handling function in proper http server that can:
- Listen on a port (server.listen(3000))
When a request comes in, Node passes two objects to your callback:
- Req (request)
- Res (response)
Set up an event loop, meaning
- Keeps the server running
- Handles multiple requests in a non-blocking way

5. How can the server be made more resilient to such errors during development?
- We can use try-catch to prevent crashes from file system errors during development.