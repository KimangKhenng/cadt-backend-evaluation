# 1.What happens when you visit a URL that doesn’t match any of the three defined?
- The server will return a default response or a 404 Not Found message if coded; otherwise, it may hang or return nothing, depending on implementation.
# 2.Why do we check both the req.url and req.method?
- Because the same URL can be used for different actions depending on the HTTP method (e.g., GET, POST). Checking both ensures accurate routing and behavior
# 3.What MIME type (Content-Type) do you set when returning HTML instead of plain text?
- text/html
# 4.How might this routing logic become harder to manage as routes grow?
The number of if-else or switch statements increases, making the code harder to read, maintain, and debug. It also increases the chances of errors or duplication.
# 5.What benefits might a framework offer to simplify this logic?
Frameworks like Express provide:
- Cleaner and declarative route definitions
- Middleware support
- Built-in error handling
- Easier parsing of request data
- Improved scalability and maintainability