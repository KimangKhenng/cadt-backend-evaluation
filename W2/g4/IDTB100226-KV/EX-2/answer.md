# HTTP Routing and MIME Types

## Q1 – What happens when you visit a URL that doesn’t match any of the three defined?

- The server responds with '404 Not Found'.

---

## Q2 – Why do we check both the req.url and req.method?

- To ensure that the correct route and HTTP method are matched for the request.

---

## Q3 – What MIME type (Content-Type) do you set when returning HTML instead of plain text?

- Content-Type: text/html.

---

## Q4 – How might this routing logic become harder to manage as routes grow?

- The code can become cluttered and harder to maintain. It’s easy to make mistakes and difficult to scale.

---

## Q5 – What benefits might a framework offer to simplify this logic?

- Frameworks like Express provide a cleaner, more organized way to handle routing, middleware, and other server functionalities.
