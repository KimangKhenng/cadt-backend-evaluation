1. What happens when you visit a URL that doesn’t match any of the three defined?  
=> The server will response 404 Not Found because of the default case in the switch block, which handles all unmatched URLs by returning a 404 response.

2. Why do we check both the req.url and req.method?  
=> Because a route can behave differently depending on the HTTP method (e.g., GET, POST, PUT, DELETE). Checking both ensures the server only responds appropriately for the specific combination of path and method.

3. What MIME type (Content-Type) do you set when returning HTML instead of plain text?  
=> 'Content-Type': 'text/html' this tells the browser to interpret the response as HTML, allowing it to render tags properly rather than showing them as raw text. 

4. How might this routing logic become harder to manage as routes grow?  
=> It becomes: 
•	Cluttered with many if/else or switch cases. 
•	Repetitive, especially when handling multiple methods for the same URL. 
•	Hard to maintain, debug, or read as logic increases. 
•	Error-prone, especially when paths or headers need more complex logic (e.g., parameters or query strings). 

5. What benefits might a framework offer to simplify this logic?  
=> Benefits might a framework offer to simplify this logic are: 
•	Routing made easy – Use readable, declarative syntax: app.get('/about', (req, 
res) => res.send('About page')); 
•	Middleware support: Add authentication, logging, etc., modularly 
•	Body parsing: Automatically parse form or JSON data 
•	Parameter support: Handle dynamic URLs like /user/:id 
•	Cleaner structure: Organize code into controllers, routers, and views for scalability 
