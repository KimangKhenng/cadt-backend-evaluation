<!-- @format -->

Exercise 2 – Manipulate
Reflective Questions

1. What happens when you visit a URL that doesn’t match any of the three defined?

Answer: If you visit a URL that doesn't match, then the server sends a response “404 Not Found” to the client.

2. Why do we check both the req.url and req.method?

Answer: Because req.url tells us which path the client is requesting, and for req.method tells us what type of action the client wants such as GET, POST, ….

3. What MIME type (Content-Type) do you set when returning HTML instead of plain text?

Answer: I set (Content-Type) to (text/html) in order it to return HTML instead of plain text. (Ex: ‘Content-Type’ : ‘text/html’).

4. How might this routing logic become harder to manage as routes grow?

Answer: As the routes grow to a larger number it can make the codebase messy and harder to read, it can end up with duplicated codes for similar routes, by just using if-else or switch can become inefficient in managing and error handling it.

5. What benefits might a framework offer to simplify this logic?
   Answer: There are many benefits such as:
   • Easy to manage and organize.
   • Reduces the need if-else or switch.
   • Improve maintainability.
   • Reused code across routes with middleware support.
   • Default error handling.
   • Speed up development.
