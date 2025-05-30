# Exercise 2

### 1. What happens when you visit a URL that doesn’t match any of the three defined?
- The server responds with a **404 Not Found** status code and the message **"404 Not Found."**

### 2. Why do we check both the `req.url` and `req.method`?
- We check both to handle different routes and HTTP methods.

### 3. What MIME type (`Content-Type`) do you set when returning HTML instead of plain text?
- Set `Content-Type` to `text/html` when returning HTML.

### 4. How might this routing logic become harder to manage as routes grow?
- As routes grow, the `if-else` block becomes harder to manage and scale.

### 5. What benefits might a framework offer to simplify this logic?
- Frameworks like **Express** simplify routing with:
  - Modular code
  - Built-in methods
  - Middleware support
  - Cleaner logic
