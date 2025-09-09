Reflective EX-2

1. What happens when you visit a URL that doesn’t match any of the three defined?
Answer : It shows ' 404 Not Found '.

2. Why do we check both the req.url and req.method?
Answer : Because :
    - req.url: This represents the URL or path of the request.
    - req.method: This represents the HTTP method used for the request.

3. What MIME type (Content-Type) do you set when returning HTML instead of plain text?
Answer : We use 'Content-Type': 'text/html'.

4. How might this routing logic become harder to manage as routes grow?
Answer : As the number of routes grows, managing routing logic with just if-else or switch statements becomes messy and hard to maintain. It gets difficult to add new routes or modify
existing ones without breaking something.

5. What benefits might a framework offer to simplify this logic?
Answer : A framework like Express simplifies routing by :
    - Organizing your code — no more messy if-else checks.
    - Handling common tasks (like parsing data, authentication) with middleware.
    - Making routes easier to manage and scale as your app grows.
