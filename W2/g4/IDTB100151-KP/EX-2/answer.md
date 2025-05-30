1.	What happens when you visit a URL that doesn’t match any of the three defined? 
It will output the 404 not found.

2.	Why do we check both the req.url and req.method? 
req.url tell us what the client want or trying to access.
Req.method tell us what action do they want to perform.

3.	What MIME type (Content-Type) do you set when returning HTML instead of plain text? 
text/html

4.	How might this routing logic become harder to manage as routes grow? 
More if-else or switch, making the code hard to read and difficult to maintain.

5.	What benefits might a framework offer to simplify this logic? 
It can improve maintainability, make the code cleaner and easier to read, have built-in routing system.