1 . EX-1  
Answer 
Q1 – What error message do you see in the terminal when you access http://localhost:3000? 
What line of code causes it?  
The error occurs on line 5 where it calls res.endd() . The error message would show something 
like "TypeError: res.endd is not a function" because there's a typo in the method name. It should 
be res.end() instead of res.endd() . 
Q2 – What is the purpose of res.write() and how is it different from res.end()?  - res.write() : This method is used to write data to the response stream. You can call it multiple 
times to send chunks of data to the client. It doesn't close the connection. - res.end() : This method signals that all response headers and body have been sent and marks the 
response as complete. It must be called on each response to finish the request-response cycle. 
You can also send final data as an argument to res.end() . 
Q3 – What do you think will happen if res.end() is not called at all?  - The client request will hang and eventually timeout - The response will never complete - Resources won't be properly released - The client browser will keep waiting for the response to finish - Memory leaks could occur due to incomplete requests 
Q4 – Why do we use http.createServer() instead of just calling a function directly?  - It creates a proper HTTP server instance that can handle incoming HTTP requests - It manages the TCP connection handling automatically - It provides proper request and response objects with all necessary HTTP functionality - It handles multiple concurrent connections - It implements the HTTP protocol specifications - It provides event-based handling of requests 
Q5 – How can the server be made more resilient to such errors during development? 
To make the server more resilient during development: 
1. Implement error handling 
2. Use development tools like: - nodemon for automatic server restart on file changes - debugging tools (Node.js debugger or IDE debuggers) - Proper logging mechanisms - Error monitoring and reporting tools 
3.Implement proper request validation and sanitization 
4.Add proper HTTP status codes and error responses 
5.Use process.on('uncaughtException') for catching unhandled errors (though this should be 
used carefully in production)