# Reflective Questions

### 1. What happens when you visit a URL that doesn’t match any of the three defined?
→ The server responds with **404 Not Found**.

---

### 2. Why do we check both the `req.url` and `req.method`?
→ To ensure we respond only to specific routes using the correct HTTP method (e.g., `GET` vs `POST`).

---

### 3. What MIME type (`Content-Type`) do you set when returning HTML instead of plain text?
→ `text/html`

---

### 4. How might this routing logic become harder to manage as routes grow?
→ It becomes cluttered, harder to read, and difficult to maintain or scale.

---

### 5. What benefits might a framework offer to simplify this logic?

Frameworks like **Express** provide:

- Easy routing (`app.get('/about', ...)`)
- Middleware support
- Cleaner, modular code structure
- Built-in error handling