Q1. What error message do you see in the terminal when you access http://localhost:3000? what line of code cause it?
-> TypeError: res.endd is not a function
Cause by the line: return res.endd();

Q2. What is the purpose of res.write() and how is it different from res.end()?
_ res.write(): send chunk of response data to client without closing connection.
_ res.end(): finish the response process and send to client.

Q3. What do you think will happen if res.end() is not called at all?
-> The browser or client will keep loading indefinitely because the server will keep the connection open.

Q4. Why do we use http.createServer() instead of just calling a function directly?
-> http.createServer() is used to create an HTTP server instance that can listen for and response to HTTP request.
Just calling a function directly: It wouldn't start server or listen on port and it wouldn't handle imcoming HTTP request.

Q5. How can the server be made more resilient to such errors during development?
->
_ Use try-catch block around request handler for runtime error
_ Add a global error-handling middleware
_ Validate user input to avoid bad data.
