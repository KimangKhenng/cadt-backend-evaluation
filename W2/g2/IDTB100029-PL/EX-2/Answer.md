# Q1 – What happens when you visit a URL that doesn’t match any of the defined?
You get a 404 or default message saying the route is not found.

# Q2 – Why do we check both req.url and req.method?
To respond differently for same URLs with different methods (GET, POST, etc.).

# Q3 – What MIME type do you set when returning HTML instead of plain text?
Use Content-Type: text/html.

# Q4 – How might this routing logic become harder to manage as routes grow?
It becomes messy and harder to read and maintain.

# Q5 – What benefits might a framework offer to simplify this logic?
Frameworks like Express make routing cleaner, easier, and faster to write.