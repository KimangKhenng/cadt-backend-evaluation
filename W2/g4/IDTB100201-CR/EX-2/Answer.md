1. What happens when you visit a URL that doesn’t match any of the three defined?
-> If the URL doesn't match any of the explicitly defined routes the server returns a 404 Not Found response with plain text content.

2. Why do we check both the req.url and req.method?
-> We check both because:
    + req.url tells us which path the client is requesting.
    + req.method tells us how the request is being made.

3. What MIME type (Content-Type) do you set when returning HTML instead of plain 
text?
-> When returining HTML we set the MIME type to 'Content-Type' : 'Text/HTML'.

4. How might this routing logic become harder to manage as routes grow?
-> As route grows this routing logic grows:
    + The if-else chain becomes long, repetitive, and hard to read.
    + It's easy to make mistakes or forget to handle certain methods.
    + Reusing code becomes difficult.
    + Testing or updating specific routes becomes messy.

5. What benefits might a framework offer to simplify this logic?
-> A framework might make the code cleane, more maintainable, and faster to develop.
