# EXERCISE 2  MANIPULATE 
<br>

## 1. What happens when you visit a URL that doesn’t match any of the three defined? 

**Answer:**
You get a `404 Not Found` response. This is handled in the `default` case of the `switch` statement, which catches any routes that aren't explicitly defined.

<br>

## 2. Why do we check both the `req.url` and `req.method`?


**Answer:** Because routing decisions depend on **both**:
- The URL path (`req.url`)   
- The HTTP method (`req.method`) like GET, POST, etc.

**This ensures the correct response for different types of requests to the same path.**

<br>

## 3. What MIME type (`Content-Type`) do you set when returning HTML instead of plain text? 

**Answer:** You set the Content-Type to `text/html`:
```js
res.setHeader('Content-Type', 'text/html');
```

<br>

## 4. How might this routing logic become harder to manage as routes grow?
**Answer:**     
- The `switch` or `if-else` blocks become cluttered.    
- It becomes difficult to maintain, test, and reuse logic.   
- Adding support for other HTTP methods (e.g., POST, PUT) increases complexity.     
- Code readability and organization suffer as the number of routes increases.

<br>

## 5. What benefits might a framework offer to simplify this logic?
**Answer:** A framework (like Express) provides:
- Clean, declarative routing syntax (e.g., `app.get('/about', handler)`)
- Built-in error handling
- Middleware support for logging, parsing, authentication, etc.
- Clear separation of concerns (routes, controllers, views)
- Better scalability, testability, and maintainability of the codebase

<br>

---