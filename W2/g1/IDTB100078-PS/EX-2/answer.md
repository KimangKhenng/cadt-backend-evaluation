EXERCISE 2 – MANIPULATE
ASK 2 – As we can see the complexity grow as we add more routes. Use switch statement
to arrange the code into more organized structure.
❓ Reflective Questions
1. What happens when you visit a URL that doesn’t match any of the three defined?
If you visit a URL that doesn’t match any of the three defined, it returns the 404
error message.

2. Why do we check both the req.url and req.method?
We check both the req.url and res.method because we want to ensure that the server respond the correct endpoint and HTTP method, adhering it to HTTP standards and enable precise routing

3. What MIME type (Content-Type) do you set when returning HTML instead of plain text?
When returning HTML instead of plain text, we use Content-Type: text/html.


4. How might this routing logic become harder to manage as routes grow?
The routing logic became harder to manage as routes grow when the switch
statements become unwisely harder to manage, especially with additional methods, dynamic routes, or middleware.

5. What benefits might a framework offer to simplify this logic?
The benefits from using framework offer to simplify this logic like by using
Express simplify routing, automate Content-Type, support middleware, handle
errors centrally, and provide a modular structure, making the code more
maintainable and scalable.
