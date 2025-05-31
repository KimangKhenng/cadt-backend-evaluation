# Q1 – What error message do you see in the terminal when you access http://localhost:3000? What line of code causes it?
Error message, we see in the terminal when we access http://localhost:3000 is” TypeError: res.endd is not a function” This error caused because by a typo in the code: res.endd() is incorrect. The correct method is res.end(); Error line: return res.endd();
# Q2 – What is the purpose of res.write() and how is it different from res.end()?
- res.write(data) sends a chunk of data to the response stream. It can be called multiple times if you want to send data in pieces.
- res.end([data]) signals the end of the response. It optionally sends a final chunk of data and closes the connection.
Difference:
- res.write() sends data but does not end the response.
- res.end() sends the final part (or nothing) and closes the connection to the client.
# Q3 – What do you think will happen if res.end() is not called at all?
- The response will hang indefinitely. The browser will keep waiting for the server to finish sending data.
- This can lead to performance issues, timeouts, or crashes in production.
# Q4 – Why do we use http.createServer() instead of just calling a function directly?
- http.createServer() wraps your request handler function and sets up a proper HTTP server that can:
 - Listen for connections
 - Handle HTTP requests and responses
 - Manage headers, status codes, and streaming
- If you just call a function directly, it won’t bind to a port or handle HTTP traffic.
# Q5 – How can the server be made more resilient to such errors during development?
1. Use proper error handling:
2. Enable strict mode (e.g., with ESLint or "use  strict";).
3. Use a linter or IDE to catch typos like res.endd().
4. Use development tools like nodemon for auto-reloading and faster debugging.
5. Write tests to verify server routes and responses.