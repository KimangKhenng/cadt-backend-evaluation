## 1. What happens when you visit a URL that doesn’t match any of the three defined?

*It will show 404 not found*

---

## 2. Why do we check both the req.url and req.method?  

*To determine how the server should response to the client request. Checking both allows a node.js server to handle different types of request and URLs enabling it to build dynamic and versatile web applications.*

---

## 3. What MIME type (Content-Type) do you set when returning HTML instead of plain 
text?  

*Text/html*

---

## 4. How might this routing logic become harder to manage as routes grow?

*As the routes grow this logic become harder to manage because:*
*- Messy code long if-else chains hard to read*
*- Hard to maintain*
*- No modularity*
*- No middleware*

---

## 5. What benefits might a framework offer to simplify this logic?  

*Express.js offers:*
*- Cleaner syntax*
*- Built-in middleware*
*- Modular routes*
*- Error handling*
*- Less Boilerplate*