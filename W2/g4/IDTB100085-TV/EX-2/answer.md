1. What happens when you visit a URL that doesn’t match any of the three defined?
-> Get a "404 NOT FOUND" response because the route doesn’t match any case. 

2. Why do we check both the req.url and req.method?
-> Because the same URL might behave different methods like GET, POST, DELETE and PUt.

3. What MIME type (Content-Type) do you set when returning HTML instead of plain text?
-> {'Content-Type': 'text/html'}

4. How might this routing logic become harder to manage as routes grow?
->
_ The switch get longer and hard to navigate.
_ Repetition in writing header and response
_ Adding, updating or removing routes can get error-prone(miss return statement, set Content-Type incorrectly....)

5. What benefits might a framework offer to simplify this logic?
->
_ Cleaner and more organized route
_ Easier error handling and debugging
_ Better code readability and maintainablity