# Exercise 2 - Manipulate
## Question - 01
**What happens when you visit a URL that doesn’t match any of the three defined?**

If we visit a URL that doesn’t match any of the route like (/about , /contact-us , /products , /projects ) the code in the final else runs. It means the server will respond with 404 not found.

---

## Question - 02
**Why do we check both the req.url and req.method?**

We check both the rep.url and req.method Because the same URL can be used with different HTTP methods for different purposes. For example:
**GET /products → Show the product list**
**POST /products → Add a new product (if implemented)**

---

## Question - 03
**What MIME type (Content-Type) do you set when returning HTML instead of plain text?**

When returning HTML from the server, we need to tell the browser that the response should be treated as an HTML document. This is done by setting the Content-Type header to "text/html". In your code, this is done using res.writeHead(200, { 'Content-Type': 'text/html' });. If we don’t set this header, the browser might not render the HTML properly and instead show it as plain text. On the other hand, when we send a simple text message like a 404 error, we use "text/plain" to indicate it’s just regular text, not HTML.

---

## Question - 04
**How might this routing logic become harder to manage as routes grow?**

Right now, it’s okay with 5 routes. But as we add more routes, the code will:
    - Get longer and harder to read
    - Be difficult to update or debug
    - Repeat similar patterns over and over
    - It Is hard to organize logic for POST, PUT, etc.
Eventually, this if-else chain becomes a big mess especially for large applications.

---

## Question - 05
**What benefits might a framework offer to simplify this logic?**

As your application grows and you add more routes and logic, using plain Node.js with lots of if-else statements becomes difficult to manage. A framework like Express.js helps simplify everything. It allows you to define routes in a cleaner and more organized way using methods like app.get() or app.post(). This makes the code shorter, easier to read, and easier to maintain. Express also provides useful features like automatic handling of 404 errors, built-in support for request data, routing parameters, and middleware that can help with logging, authentication, and more. Overall, it saves time and reduces the chance of making mistakes in routing logic.