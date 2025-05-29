# Exercise 1

## Q1 – What error message do you see in the terminal when you access `http://localhost:3000`? What line of code causes it?

**Error message:**  
`TypeError: res.endd is not a function`

**Cause line:**  
`return res.endd();`

---

## Q2 – What is the purpose of `res.write()` and how is it different from `res.end()`?

- `res.write()` sends a chunk of the response body to the client. You can call it multiple times to stream data.
- `res.end()` signals that the response is finished. It can optionally send a final chunk of data and **must** be called to close the connection.

---

## Q3 – What do you think will happen if `res.end()` is not called at all?

If `res.end()` is never called:

- The browser will keep waiting.
- The request hangs, and the page never finishes loading.
- The connection may eventually time out.

---

## Q4 – Why do we use `http.createServer()` instead of just calling a function directly?

We use `http.createServer()` because:

- It sets up a proper HTTP server that listens for requests and sends responses.
- Simply calling a function wouldn’t create a server or open a port — it wouldn’t listen for incoming HTTP requests (e.g., from browsers).

---

## Q5 – How can the server be made more resilient to such errors during development?

- Use development tools like `nodemon` to auto-restart the server on changes.
- Add error handling (e.g., `try/catch` blocks).
- Validate inputs/responses before processing.
