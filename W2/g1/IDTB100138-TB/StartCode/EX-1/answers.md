1. What error message do you see in the terminal when you access
http://localhost:3000? What line of code causes it?
It will throw the runtime error because of res.endd(); is undefined.
2. What is the purpose of res.write() and how is it different from res.end()?
- Purpose:
● res.write() : sends a chunk of data to client and it does not end the response.
● res.end() : Ends the response, optionally can send the last piece of data.
- Different:
● res.write() ; can be called multiple times.
● res.end() : must be called once to finalize the response.
3. What do you think will happen if res.end() is not called at all?
- The browser will hang indefinitely, waiting for the server to finish the response.
- No data is considered complete and flushed.
- May eventually timeout.
- The server will not close the connection, potentially leaking resources.
- Display nothing on web page
4. Why do we use http.createServer() instead of just calling a function directly?
- http.createServer() sets up an actual HTTP server, which:
● Listens for HTTP requests
● Handles TCP connections
● Invokes your callback for each incoming request
- Just calling a function directly would not:
● Bind to a network port
● Accept HTTP requests
● Act as a server
5. How can the server be made more resilient to such errors during development?
- Improve resilient
● Use error handling
● Always use res.end() to finalize the response
● Log errors to help diagnose issues
● Use tools like Nodemon for automatic restarts on crash