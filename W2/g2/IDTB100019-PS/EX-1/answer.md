# Node.js HTTP Server – Questions and Answers

### Q1 – What error message do you see in the terminal when you access http://localhost:3000? What line of code causes it?

**Error:**
return res.endd();
^
TypeError: res.endd is not a function
at Server.<anonymous>

**Cause Line:**  
`server.js:6:16`

**Reason:**  
`endd` is a typo. It should be `end`.

---

### Q2 – What is the purpose of `res.write()` and how is it different from `res.end()`?

- The purpose of `res.write()` is to write data to the HTTP response stream.
- `res.end()` is used to signal the end of the response. It can be called with or without additional data.
- In short:  
  - `res.write()` → sends data  
  - `res.end()` → ends the response

---

### Q3 – What do you think will happen if `res.end()` is not called at all?

- The client will hang (continuously loading) because the response is never marked as complete.
- Not calling `res.end()` keeps the connection open, which can cause:
  - Server performance degradation  
  - Client timeouts  
  - Hanging requests  
  - Potential memory leaks or errors

---

### Q4 – Why do we use `http.createServer()` instead of just calling a function directly?

- `http.createServer()` sets up an actual HTTP server that listens for incoming requests and routes them accordingly.
- A regular function cannot handle HTTP traffic without being attached to a server.

---

### Q5 – How can the server be made more resilient to such errors during development?

To improve resilience during development:

- Implement **try-catch** blocks to handle unexpected errors  
- Use **timeouts** to avoid hanging requests  
- Add **input validation** to avoid logic issues  
- Enable **auto-restarts** using tools like `nodemon`  
- Add **logging and monitoring** to detect issues early  
- Consider **load balancing** and **redundancy** for larger systems

---
