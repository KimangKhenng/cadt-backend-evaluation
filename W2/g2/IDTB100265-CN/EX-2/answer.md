1. What happens when you visit a URL that doesn’t match any of the three defined?
➢ When the URL does not match, the server response with HTTP status code 404 indicated
the page is not found.

2. Why do we check both the req.url and req.method?
➢ We check both the req.url and req.method because we want to know which resource is
requested and what method does the client wants to perform.

3. What MIME type (Content-Type) do you set when returning HTML instead of plain
text?
➢ Text/html

4. How might this routing logic become harder to manage as routes grow?
➢ As routes grow, the routing logic becomes harder for several reasons:
Code becomes repetitive as
- Lots of if…else or switch statement.
- Repetitive res.writeHead and res.end for each route.
- Easy to miss route or forget to handle method.
- Error handling get complex.

5. What benefits might a framework offer to simplify this logic?
➢ Framework like Express.js offer:
- Cleaner route definitions
- Middleware support
- Built-in parsing, routing, and error handling