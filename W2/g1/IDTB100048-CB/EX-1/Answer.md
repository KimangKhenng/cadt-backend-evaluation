# Exercise 1

### Q1 – What error message do you see in the terminal when you access http://localhost:3000? What line of code causes it?

**Answer:**  
The error message that displays is:  
`res.endd is not a function`  
This is caused by line 4: `res.endd()`

---

### Q2 – What is the purpose of `res.write()` and how is it different from `res.end()`?

**Answer:**  
`res.write()` is used to send a chunk of the response body. It can be called multiple times to stream data.  
`res.end()` signals the end of the response and is called only once. It finalizes the HTTP response.

---

### Q3 – What do you think will happen if `res.end()` is not called at all?

**Answer:**  
If `res.end()` is not called, the response will not be finalized, and the client will keep waiting. This may lead to timeouts and the request never completing.

---

### Q4 – Why do we use `http.createServer()` instead of just calling a function directly?

**Answer:**  
We use `http.createServer()` in Node.js to create a server instance that listens for HTTP requests. It handles networking, sets up request/response handling, and uses an event-driven model to process requests.

---

### Q5 – How can the server be made more resilient to such errors during development?

**Answer:**  
To make the server more resilient:
- Use `try-catch` blocks
- Implement global error handlers
- Use linters or TypeScript to catch typos
- Use tools like `nodemon` for auto-restart
- Add logging and validation
- Use frameworks like Express for better error handling
- Write automated tests
