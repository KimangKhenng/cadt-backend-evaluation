# HTTP Routing Questions

### 1. What happens when you visit a URL that doesn’t match any of the three defined?
It will return **404 Not Found**.

---

### 2. Why do we check both the `req.url` and `req.method`?
We check to ensure the correct **path** and the correct **HTTP method** (e.g., GET, POST) are being used.

---

### 3. What MIME type (`Content-Type`) do you set when returning HTML instead of plain text?
`text/html`

---

### 4. How might this routing logic become harder to manage as routes grow?
When the number of routes grows, the logic becomes more complex and **harder to manage**, debug, and maintain due to increased **conditional checks** and **duplicate code**.

---

### 5. What benefits might a framework offer to simplify this logic?
A framework simplifies routing by:
- **Abstracting repetitive logic**
- **Supporting middleware**
- **Handling different HTTP methods cleanly**
- **Enabling modular and scalable routing**
- **Providing built-in error handling**
