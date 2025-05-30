## Exercise 1

### Q1 – What error message do you see in the terminal when you access http://localhost:3000? What line of code causes it?  
- The error message is: `TypeError: red.endd is not a function`  
- The cause is a typo in calling `red.endd()` instead of `res.end()`  

### Q2 – What is the purpose of `res.write()` and how is it different from `res.end()`?  
- `res.write()` sends a chunk of the response body to the client without closing the connection.  
- `res.end()` signals that all response data has been sent and closes the writable stream.  

### Q3 – What do you think will happen if `res.end()` is not called at all?  
- If `res.end()` is not called, the client connection remains open, the browser will keep waiting for the response to finish and eventually time out.  

### Q4 – Why do we use `http.createServer()` instead of just calling a function directly?  
- `http.createServer()` returns an `http.Server` instance that listens on a TCP port and invokes our callbacks for each incoming request. It abstracts socket handling and allows multiple concurrent connections.  

### Q5 – How can the server be made more resilient to such errors during development?  
- Validate routes/methods.
- Use middleware for error handling.