# Exercise 1

### Q1 – What error message do you see in the terminal when you access `http://localhost:3000`? What line of code causes it?
- **Error:** `TypeError: res.endd is not a function`
- **Cause:** The code `return res.endd();` should be corrected to `res.end();`

### Q2 – What is the purpose of `res.write()` and how is it different from `res.end()`?
- `res.write()` sends a chunk of the response to the client.
- `res.end()` finishes the response to the client.

### Q3 – What do you think will happen if `res.end()` is not called at all?
- The browser keeps waiting for a response.

### Q4 – Why do we use `http.createServer()` instead of just calling a function directly?
- It sets up an HTTP server that listens for requests and responses.
- Just calling a function wouldn’t create a listening server.

### Q5 – How can the server be made more resilient to such errors during development?
- Use `try-catch` blocks to handle errors.