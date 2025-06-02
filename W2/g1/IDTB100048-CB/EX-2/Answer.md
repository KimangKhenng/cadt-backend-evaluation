# Exercise 2

### 1. What happens when you visit a URL that doesn’t match any of the three defined?

**Answer:**  
It returns a 404 error response indicating the route is not found.

---

### 2. Why do we check both the `req.url` and `req.method`?

**Answer:**  
We check both to ensure the request matches a specific endpoint and HTTP method (e.g., GET, POST). This allows proper routing and avoids unintended behavior.

---

### 3. What MIME type (`Content-Type`) do you set when returning HTML instead of plain text?

**Answer:**  
The correct `Content-Type` header is:  
`text/html`

---

### 4. How might this routing logic become harder to manage as routes grow?

**Answer:**  
As the number of routes increases, using conditionals or switch statements becomes messy and error-prone. It’s harder to maintain and debug as complexity grows.

---

### 5. What benefits might a framework offer to simplify this logic?

**Answer:**  
Frameworks like Express offer:
- Cleaner routing with route handlers
- Built-in middleware and error handling
- Better organization (e.g., separate files for routes)
- Simplified request parsing and response handling
- Scalability and maintainability
