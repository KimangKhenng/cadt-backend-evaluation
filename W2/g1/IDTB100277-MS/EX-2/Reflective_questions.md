# EXERCISE 2–Reflective Questions

1–What happens when you visit a URL that doesn’t match any of the three defined?
Answer: You will be responded with “404 Not Found” message.

2–Why do we check both the req.url and req.method?
Answer: Because a request can have the same URL but different method.

3–What MIME type (Content-Type) do you set when returning HTML instead of plain text?
Answer: The Content-Type for HTML is “text/html”.

4–How might this routing logic become harder to manage as routes grow?
Answer:It can become harder to manage due to several reasons:

- No dynamic routing
- Hard to organize as all the logic is in one place with no separation of concern
- The code becomes repetitive as URL and Method is used innearly all cases
- Hard to read and maintain as more routes are created

5–What benefits might a framework offer to simplify this logic?
Answer:A framework might offer:

- Less verbose way to handle routing
- Offer dynamic routing
- The abilityto split routes into files to keep the logic isolated and more readable.
