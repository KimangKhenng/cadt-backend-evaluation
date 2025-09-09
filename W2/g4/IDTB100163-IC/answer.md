# Exercise1
// server.js 
const http = require('http'); 
 const server = http.createServer((req, res) => {   res.write('Hello, World!');   return res.endd(); 
});  server.listen(3000, () => {   console.log('Server running on http://localhost:3000'); }); 


## Q1 – What error message do you see in the terminal when you access http://localhost:3000? What line of code causes it? 
The message was: Connection was forcibly closed by a peer, which cases by the line return res.endd();
 
## Q2 – What is the purpose of res.write() and how is it different from res.end()? 
restwrite() send a chuck of data to the client, and it does not end the response (the connection stays on), whereas rest.end() signal that you’re done sending the response.
 
## Q3 – What do you think will happen if res.end() is not called at all? 
- The response stays open, the client keeps waiting.
- The browser shows a loading spinner and doesn’t finish the request
- Then, it may time out, showing an error like this site can’t be reached.
## Q4 – Why do we use http.createServer() instead of just calling a function directly? 
Because calling a function directly only runs once immediately, it doesn’t wait for real web requests. But what http.createSever () does is that:
- It sets up a listener for HTTP requests on a port 
- It waits for connections from Chrome, Postman, curl, etc
- It calls your callback function every time a request comes in.
 
## Q5 – How can the server be made more resilient to such errors during development? 
- Use try…catch and Error Handling 
- Use nodemon for Auto-Restarting 
- Set timeouts and Limits to protect against hanging connections

# Exercise2

## Q1 - What happens when you visit a URL that doesn’t match any of the three defined? 
IF the URL doesn’t match any of the defined it pops the message 404 Not Found.

## Q2 - Why do we check both the req.url and req.method? 
We check both the req.url and req.method because a single URL can respond differently depending on

## Q3 - What MIME type (Content-Type) do you set when returning HTML instead of plain text?
The MIME type (Content-Type) text/html is set when returning HTML instead of plain text.

## Q4 - How might this routing logic become harder to manage as routes grow? 
This routing logic becomes harder to manage as routes grow because of:
- Too many conditions: the code blocks become long, hard to read, and error-prone.
- No separate of concerns: all the logic is crammed into one place ( server.js ), which lead to difficulty in testing, reuse, collaborate.
- Poor Scalability: when adding features (like middleware, authentication, sessions), this simple structure becomes unmanageable

## Q5 - What benefits might a framework offer to simplify this logic? 
A framework (like Express.js for Node.js) can simplify routing by offering:
- Cleaner syntax and route definitions (e.g., app.get('/home', handler) instead of manual if checks).
- Middleware support to handle repeated tasks like logging, authentication, and error handling.
- Modular structure to split routes and logic into separate files, improving readability and maintainability.
- Built-in utilities for handling requests, responses, routing, and even templating, reducing boilerplate code.

# Exercise3

## Q1-Why do we listen for data and end events when handling POST? 
When handling a Post request, the request body is streamed in chunks, meaning it doesn’t arrive all at once.
- The data event captures each chunk of incoming data
- The end event signals when all the data has been received, allowing us to process the full request body.

## Q2-What would happen if we didn’t buffer the body correctly? 
If we didn’t store the chunks of data, the request body would be incomplete or corrupted. This could lead to:
- Partial or missing user input
- Errors when parsing the data 
- Security vulnerabilities if handling large payloads improperly.

## Q3-What is the format of form submissions when using the default browser form POST? 
By default, browser forms submit data in URL-encoded format, similar to query parameters in a URL. This format is called application/x-www-form-urlencoded. If the form includes file uploads, it uses multipart/form-data.

## Q4-Why do we use fs.appendFile instead of fs.writeFile? 
We use fs.appendFile instead of fs.writeFile because
- Fs.appendFile adds new data to the file without erasing existing content
- Fs.writeFile overwrites the file completely.
Since we want to store multi form submissions, fs.appendFile ensures new data is added instead of replacing previous entries.

## Q5-How could this be improved or made more secure? 
This can be improved it by:
- Validate user input
- Sanitize data 
- Use a database

