# Exercise 2: Reflective Questions

---

## Q1 – What happens when you visit a URL that doesn’t match any of the three defined?

The server responds with:  
`404 Not Found`.

---

## Q2 – Why do we check both `req.url` and `req.method`?

We check:

- **`req.url`**: Determines the requested resource (e.g., `/home`, `/about`).
- **`req.method`**: Identifies the action (e.g., `GET`, `POST`, `DELETE`).

This ensures the server handles the correct route _and_ HTTP method.

---

## Q3 – What MIME type (`Content-Type`) do you set when returning HTML instead of plain text?

```javascript
res.setHeader('Content-Type', 'text/html');

---

## Q4 – How might this routing logic become harder to manage as routes grow?
- Code becomes repetitive and hard to read
- It’s end up writing many if-else or switch statements.
- Logic gets scattered, making it hard to maintain.
- Handling query parameters, route parameters, and methods becomes
messy.
---

## Q5 – What benefits might a framework offer to simplify this logic?

Frameworks like Express.js provide:

- Parsing JSON or form data
- Error handling
- Static file serving
- Route grouping (e.g., using Router())
- Parameter handling (e.g., /user/:id)
- Better support for large-scale apps
- Cleaner routing

---



