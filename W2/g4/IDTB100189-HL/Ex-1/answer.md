# 📘 Native HTTP Practice – Week 2

**Practice Topics:** Native HTTP Module & Manual Routing

---

## I. Exercise 1 – Analyze

1. **What error message do you see in the terminal when you access `http://localhost:3000`? What line of code causes it?**  
   ➤ Error: `res.endd is not a function`.  
   ➤ **Line**: 6.

2. **What is the purpose of `res.write()` and how is it different from `res.end()`?**  
   ➤ `res.write()` sends a chunk of the response body to the client.  
   ➤ `res.end()` signals that the response is complete.

3. **What do you think will happen if `res.end()` is not called at all?**  
   ➤ The HTTP response will remain open and the client will:
   - Wait indefinitely (or until it times out), thinking more data is coming.
   - Not display the contents properly, because the response isn’t marked as complete.
   - Cause memory/resource leaks in the server.

4. **Why do we use `http.createServer()` instead of just calling a function directly?**  
   ➤ It is responsible for creating an actual HTTP server that listens for and handles HTTP requests – something a regular function can’t do.

5. **How can the server be made more resilient to such errors during development?**  
   ➤ By using error handling, logging, and optionally development tools that help track or recover from crashes.