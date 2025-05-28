# Server Questions and Answers

### Q1 – What error message do you see in the terminal when you access http://localhost:3000? What line of code causes it?

**Error Message:**

D:\coding\Year2\term3\StartCode\EX-1\server2.js:4
        return res.endd();


**Cause:**
The error is due to a typo in the code. The method `res.endd()` is incorrectly spelled — the correct method is `res.end()`.

---

### Q2 – What is the purpose of `res.write()` and how is it different from `res.end()`?

- `res.write()` is used to send a chunk of the response body to the client. It can be called multiple times and is often used when building a response dynamically.
- `res.end()` signals the end of the response. It must be called once, and no further writes should happen after it.

---

### Q3 – What do you think will happen if `res.end()` is not called at all?

If `res.end()` is not called, the server will not signal to the client that it has finished sending the response. As a result, the client will be left hanging, waiting indefinitely for the response to finish.

---

### Q4 – Why do we use `http.createServer()` instead of just calling a function directly?

`http.createServer()` sets up an HTTP server that listens for and handles HTTP requests. Just calling a function directly doesn't initiate an actual server or listen on a network port, so it won't respond to HTTP requests.

---

### Q5 – How can the server be made more resilient to such errors during development?

- Use `try-catch` blocks to handle runtime errors gracefully.
- Validate input received from clients to avoid unexpected behavior.
- Use tools like linters or TypeScript to catch typos and other common mistakes during development.
