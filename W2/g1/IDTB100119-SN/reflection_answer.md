
Reflection Answers
Exercise 1 – Review and Analyze
Q1. What error message appears in the terminal when accessing http://localhost:3000? Which line causes it?
A1. A runtime error occurs due to the incorrect method call res.endd();, which is undefined.

Q2. What is the purpose of res.write() and how does it differ from res.end()?
A2.

res.write(): Sends a chunk of data to the client without ending the response. Can be called multiple times.
res.end(): Ends the response and optionally sends the final data. Must be called once to complete the response.
Q3. What occurs if res.end() is not called?
A3. The browser will wait indefinitely; the connection remains open, potentially causing resource leaks and timeouts.

Q4. Why use http.createServer() instead of calling a function directly?
A4. http.createServer() creates and manages an HTTP server, handling requests and TCP connections. A plain function does not provide this.

Q5. How can the server be made more resilient during development?
A5.

Implement error handling.
Ensure res.end() is always called.
Use console logs for debugging.
Use tools like Nodemon for automatic restarts.
Exercise 2 – Manipulate
Q1. What happens when visiting a URL not defined in the routing logic?
A1. A plain text 404 error message is displayed.

Q2. Why check both req.url and req.method?
A2. The same URL can have different behavior for different HTTP methods (e.g., GET vs POST).

Q3. What Content-Type should be set when returning HTML instead of plain text?
A3.

For HTML: Content-Type: text/html
For plain text: Content-Type: text/plain
Q4. How does increasing route complexity affect routing logic?
A4.

Leads to lengthy and complex if-else chains
Reduces readability and maintainability
Makes it harder to scale and reuse code
Complicates middleware integration
Q5. What are the advantages of using a framework for routing?
A5.

Simpler route definitions
Middleware support
Modular routing (separate files)
Built-in error handling and utilities (e.g., res.status(), res.json())
Exercise 3 – Create
Q1. Why listen for data and end events when handling a POST request?
A1. The POST body is received as a stream:

data: Collects data chunks
end: Signals data collection is complete
Q2. What happens if the body is not buffered correctly?
A2.

Data may be incomplete or lost
File writes may contain partial data
Input parsing can fail
Q3. What is the format of form submissions via browser POST requests?
A3. application/x-www-form-urlencoded (e.g., name=Heng)

Q4. Why use fs.appendFile instead of fs.writeFile?
A4.

fs.writeFile overwrites the file
fs.appendFile adds data to the end, preserving previous entries
Q5. How can the implementation be improved or made more secure?
A5.

Properly parse and validate form data
Avoid synchronous file operations
Provide user feedback after submission
Validate input fields
Use JSON for structured data storage
