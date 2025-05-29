# 📘 Native HTTP Practice – Week 2

**Practice Topics:** Native HTTP Module & Manual Routing

---

## II. Exercise 2 – Manipulate

1. **What happens when you visit a URL that doesn’t match any of the three defined?**  
   ➤ It likely returns a **404 error** by default.

2. **Why do we check both `req.url` and `req.method`?**  
   ➤ To:
   - Identify the resource the client is requesting (e.g., `/home`, `/about`).
   - Determine how the client wants to interact with it (e.g., GET, POST, PUT, DELETE).

3. **What MIME type (`Content-Type`) do you set when returning HTML instead of plain text?**  
   ➤ `Content-Type: text/html`  
   ➤ This tells the browser to interpret the response as HTML so it can render it properly.

4. **How might this routing logic become harder to manage as routes grow?**  
   ➤ Manual routing becomes messy, hard to read, error-prone, and difficult to scale or organize.

5. **What benefits might a framework offer to simplify this logic?**  
   ➤ A framework like **Express** offers:
   - Cleaner syntax
   - Built-in middleware
   - Better structure
   - Easier maintenance