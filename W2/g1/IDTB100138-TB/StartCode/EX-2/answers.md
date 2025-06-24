1. What happens when you visit a URL that doesn’t match any of the three
defined?
Webpage will display 404 error with the plain text message
2. Why do we check both the req.url and req.method?
Because HTTP defines multiple methods, and you may want to handle the same
URL differently depending on the method.
Example: GET /products will return products list
POST /products will add a new product
3. What MIME type (Content-Type) do you set when returning HTML instead of
plain text?
● For HTML content ("Content-Type": "text/html")
● For Plain text ("Content-Type": "text/plain")
4. How might this routing logic become harder to manage as routes grow?
As the number of routes increases:
● You’ll end up with a long chain of if-else statements
● Code becomes hard to read, hard to maintain, and error-prone
● Difficult to add middlewares
● Repeating logic can’t be reused easily
5. What benefits might a framework offer to simplify this logic?
Frameworks like Express.js provide:
● Cleaner syntax for routing
● Middleware support
● Modular routing – you can separate routes into files
● Automatic headers, better error handling, more flexibility
● Built-in helpers like res.json(), res.status()