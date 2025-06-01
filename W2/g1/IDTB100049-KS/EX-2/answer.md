
# Answers to HTTP Routing Questions

## Q1 – What happens when you visit a URL that doesn’t match any of the three defined?
**Answer**: It loaded 404 Not Found.

## Q2 – Why do we check both the req.url and req.method?
**Answer**: We check both of them because we check `req.url` to verify the correct URL and `req.method` to specify which method we want to use, either 'GET' or 'POST'.

## Q3 – What MIME type (Content-Type) do you set when returning HTML instead of plain text?
**Answer**: When returning HTML instead of plain text, we use `Content-Type: text/html`.

## Q4 – How might this routing logic become harder to manage as routes grow?
**Answer**: The routing logic becomes harder to manage as routes grow when the switch statement becomes unwieldy, especially with additional methods, dynamic routes, or middleware.

## Q5 – What benefits might a framework offer to simplify this logic?
**Answer**: The benefits of using a framework like Express include simplified routing, automated Content-Type handling, support for middleware, centralized error handling, and a modular structure, making the code more maintainable and scalable.
