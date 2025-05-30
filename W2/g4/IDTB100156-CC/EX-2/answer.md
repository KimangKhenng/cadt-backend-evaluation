Reflective Questions 
1.	What happens when you visit a URL that doesn’t match any of the three defined? 
2.	Why do we check both the req.url and req.method? 
3.	What MIME type (Content-Type) do you set when returning HTML instead of plain text? 
4.	How might this routing logic become harder to manage as routes grow? 
5.	What benefits might a framework offer to simplify this logic? 
Answer:
1.	If the URL doesn’t match any of the three defined, it responses 404 not found.
2.	We check both the req.url and req.method to make sure we’re handling the right type of request for the right resource. This lets us respond correctly based on what the client wants to do. 
3.	‘Content-Type’: ‘text/html’
4.	As routes grow, using plain if or switch statements makes the code harder to read, update, and maintain. It becomes messy and harder to manage especially in large applications.
5.	A framework can help make routing easier to understand and manage. Instead of writing long if or switch statements, we can just use simple functions for each route. It also helps organize the code better, especially when there are many routes.
