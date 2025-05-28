Q1 – What error message do you see in the terminal when you access? What line of code causes it?

Answer: It give me TypeError: res.endd is not a function. The line
return res.endd(); cause it because it duplicated d, the right code is .end()


Q2 – What is the purpose of res.write() and how is it different from res.end()?

Answer: The purpose of res.write() is sends a chunk of the response body to the client without ending the response and about the res.end() which to signals that all response data has been sent and ends the response.


Q3 – What do you think will happen if res.end() is not called at all?

Answer: If res.end is not called at all, the server won’t finish sending the response and the browser will keep loading, waiting it to complete.


Q4 – Why do we use http.createServer() instead of just calling a function directly?

Answer: Because we want to create a web server that can handle HTTP requests, just calling a function won’t start a server or listen for requests.


Q5 – How can the server be made more resilient to such errors during development?

Answer: To make the server more resilient to such errors during development, We can wrap request-handling logic in try...catch blocks and listen for 'error' events to prevent crashes and log issues.


Reflective Questions

1. What happens when you visit a URL that doesn’t match any of the three defined?

Answer: It will give the message 404 Not Found.

2. Why do we check both the req.url and req.method?

Answer: Because we want to to ensure the server responds only to the correct url and the correct type of HTTP request method.

3. What MIME type (Content-Type) do you set when returning HTML instead of plain text?

Answer: The MIME type that we set when returning HTML instead of plain text is text/html.

4. How might this routing logic become harder to manage as routes grow?

Answer: Because it make difficult-to-read code with many conditional checks,

making it harder to keep track of all the routes, and make it hard to maintain.

5. What benefits might a framework offer to simplify this logic?

Answer: The benefits which framework offer to simplify this login such as providing built-in tools for organizing routes, handling HTTP methods, and managing URL parameters, reduces the need for manual checks and make the code more structured which easy to read.

Discussion Questions

1. Why do we listen for data and end events when handling POST?

Answer: Because we want to collect the incoming data and for end to know when the entire request body has been received.

2. What would happen if we didn’t buffer the body correctly?

Answer: If we didn’t buffer the body correctly, we could lose parts of the data or process incomplete data, leading to errors or incorrect behavior in the application.

3. What is the format of form submissions when using the default browser form POST?

Answer: The format of form submissions when using the default browser form POST is: application/x-www-form-urlencoded

4. Why do we use fs.appendFile instead of fs.writeFile?

Answer: We use fs.appendFile to add new data to the end of a file without overwriting its existing contents, while fs.writeFile replaces the entire file content.

5. How could this be improved or made more secure?

Answer: Use a database instead of a file, validate input strictly, set proper HTTP headers, and avoid exposing detailed errors to users.