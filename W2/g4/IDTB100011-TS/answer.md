# W2 PRACTICE - Native HTTP and Manual Routing

## Exercise 1 – Analyze

### Q1 – What error message do you see in the terminal when you access http://localhost:3000? What line of code causes it?

The error message that I see in the terminal when I access the url is `curl: (52) Empty reply from server`.

The line of code that causes the error is the `return res.endd();` because of the miss spell, it
should be `res.end();`.

### Q2 – What is the purpose of `res.write()` and how is it different from `res.end()`?
The purpose of `res.write()` is to write data into the HTTP response stream.

Both methods are used for sending data in HTTP response, but they differ in how they handle the end of response stream. `res.write()` write data to response stream without closing it,
allowing future write, while `res.end()` signal the end of response stream.

### Q3 – What do you think will happen if `res.end()` is not called at all?
If `res.end()` is not called, the HTTP response stream remains open, leading to a hanging connection and potential server performance issues.

### Q4 – Why do we use `http.createServer()` instead of just calling a function directly?
Calling a function directly cannot create a server capable of handling HTTP requests. `http.createServer()` sets up the necessary infrastructure to listen for and respond to HTTP requests.

### Q5 – How can the server be made more resilient to such errors during development?
To make a server more resilient during development, implement fault tolerance mechanisms,
redundancy, and thorough monitoring. This includes strategies like load balancing, failover, and
error handling to prevent disruptions and maintain service availability during errors or failures.

---

## Exercise 2 – Manipulate

### Reflective Questions

### Q1 - What happens when you visit a URL that doesn’t match any of the three defined?  
It will display `404 Not Found`

### Q2 - Why do we check both the `req.url` and `req.method`?
Because they provide crucial information about incoming HTTP request. `req.url` tells the path of the requested resource, while `req.method` indicates the type of action the client intends to perform on that resource (GET, POST, etc.).

### Q3 - What MIME type (Content-Type) do you set when returning HTML instead of plain text?
`text/html`

### Q4 - How might this routing logic become harder to manage as routes grow?
- Becomes messy and repetitive with many if or switch blocks
- Hard to read, debug, or extend
- No modular separation of routes or handlers

### Q5 - What benefits might a framework offer to simplify this logic?
- Frameworks like Express.js provide:
- Cleaner routing
- Auto parsing of request data
- Error handling
- Better file and template support

---

## Exercise 3 – Create

### Discussion Questions

### Q1 - Why do we listen for data and end events when handling POST?
Because POST data is sent in chunks, and we need to:
- Collect them (`req.on('data', ...)`)
- Then process when it’s complete (`req.on('end', ...)`)

### Q2 - What would happen if we didn’t buffer the body correctly?
- Data would be incomplete or corrupted
- We’d only get part of the form data or an empty result
- Parsing would fail

### Q3 - What is the format of form submissions when using the default browser form POST?
- `application/x-www-form-urlencoded`

### Q4 - Why do we use `fs.appendFile` instead of `fs.writeFile`?
- `fs.appendFile` adds new data without erasing existing data
- `fs.writeFile` would overwrite the entire file each time
- For logs or storing multiple submissions, `appendFile` is safer.

### Q5 - How could this be improved or made more secure?
- Validate input (e.g., check if name is not empty)
- Save in a structured format like JSON
- Send back a confirmation page, not just plain text
- Use HTTPS in real deployments