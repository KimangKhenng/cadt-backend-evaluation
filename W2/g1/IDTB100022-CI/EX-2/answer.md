# Exercise 2

## ❓ Reflective Questions

### 1. What happens when you visit a URL that doesn’t match any of the three defined?

**Answer:**
It shows `404 Not Found`.

### 2. Why do we check both the `req.url` and `req.method`?

**Answer:**
We check `req.url` to determine which route the client is requesting and `req.method` to identify the type of HTTP request (GET, POST, etc.). This allows the server to respond differently based on the combination of the route and method. For example, a GET request to `/about` might return a page, while a POST request might submit data.

### 3. What MIME type (Content-Type) do you set when returning HTML instead of plain text?

**Answer:**
When returning HTML content, the MIME type should be `text/html`. This tells the browser that the response contains HTML and should be rendered accordingly. In contrast, `text/plain` is used for plain text responses.

### 4. How might this routing logic become harder to manage as routes grow?

**Answer:**
As the number of routes increases, the routing logic becomes harder to manage due to code duplication and clutter. More routes lead to more conditions or cases, making the logic harder to navigate and maintain.

### 5. What benefits might a framework offer to simplify this logic?

**Answer:**
Frameworks like Express simplify routing by providing a clean, modular way to define routes. They make the code easier to read, maintain, and scale.
