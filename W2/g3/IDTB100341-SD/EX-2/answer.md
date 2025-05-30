#  Reflective Questions 

<br>

## 1. What happens when you visit a URL that doesn’t match any of the three defined? 

**Answer:**  
`Status code 404 Not Found` is returned for unmatched URLs.

<br>

## Why do we check both the req.url and req.method?

**Anwser:**  
To ensure the server responds only to the correct route and method `(e.g., GET, POST)`.

<br>

## 3. What MIME type (Content-Type) do you set when returning HTML instead of plain text? 

**Answer:**  
We use `text/html` for HTML responses instead of text/plain.

<br>

## 4. How might this routing logic become harder to manage as routes grow?

**Answer:**  
More routes make the switch or if-else structure hard to read and maintain

<br>

## 5. What benefits might a framework offer to simplify this logic?

**Answer:**  
Frameworks like `Express.js` offer cleaner routing, middleware support, and better error handling.
