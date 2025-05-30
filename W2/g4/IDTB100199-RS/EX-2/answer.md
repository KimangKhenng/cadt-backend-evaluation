## Exercise 2

### 1. What happens when you visit a URL that doesn’t match any of the three defined?  
- It returns `404 Not Found`.  

### 2. Why do we check both the `req.url` and `req.method`?  
- To ensure the server responds correctly to both the requested path and HTTP method (e.g., GET, POST).  

### 3. What MIME type (`Content-Type`) do you set when returning HTML instead of plain text?  
- `text/html`.  

### 4. How might this routing logic become harder to manage as routes grow?  
- Manually managing many conditions in a single function becomes harder to maintain, test, and scale.  

### 5. What benefits might a framework offer to simplify this logic?  
- Frameworks provide clean routing, middleware, error handling, and a more organized project structure.