1. What happens when you visit a URL that doesn’t match any of the three defined?
=> You’ll get a 404 Not Found response. This happens because the default case in the
switch handles unknown routes.


2. Why do we check both the req.url and req.method?
=> Because a route like /about might respond differently to different methods (GET, POST,
etc.). Checking both helps control behavior based on the URL and the HTTP method
used.


3. What MIME type (Content-Type) do you set when returning HTML instead of plain
text?
=> res.setHeader('Content-Type', 'text/html');


4. How might this routing logic become harder to manage as routes grow?
=> The code will become long and messy, especially with many if-else or switch cases. It’s
harder to read, maintain, and test.


5. What benefits might a framework offer to simplify this logic?
=> Frameworks like Express.js provide:
• Cleaner routing (app.get('/about', ...))
• Middleware support
• Built-in error handling
• Better structure for large apps