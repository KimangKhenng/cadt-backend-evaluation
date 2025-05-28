+ Answer Ex1
Q1 – What error message do you see in the terminal when you access 
http://localhost:3000? What line of code causes it?  
    . The error message is: This site can’t be reached 
    . Line 5 return res.endd()  cause this. 

Q2 – What is the purpose of res.write() and how is it different from res.end()?  
    • res.write() sends a chunk of the response body to the client but keeps the connection open, allowing more data to be sent later. 
    • res.end() ends the response, optionally sending a final chunk of data. Once res.end() is called, no further writes are possible.

Q3 – What do you think will happen if res.end() is not called at all?  
    If res.end() is not called, we can’t see the page localhost:3000 because it keep loading. 

Q4 – Why do we use http.createServer() instead of just calling a function directly?  
    http.createServer() creates an HTTP server that listens for incoming requests, handles them asynchronously, and sends responses.  

Q5 – How can the server be made more resilient to such errors during development?  
    One straightforward approach is to use a tool like Nodemon or a similar file watcher that 
    automatically restarts your server whenever you modify your code. This ensures that you quickly 
    notice and recover from runtime errors. In addition, you could wrap your request-handling logic 
    in error handling (try/catch blocks, middleware in frameworks like Express, etc.), or use a more 
    structured application framework that surfaces and logs these errors in a more graceful way. 

+ Answer Ex2

Reflective Questions  
1. What happens when you visit a URL that doesn’t match any of the three defined?  
2. Why do we check both the req.url and req.method?  
3. What MIME type (Content-Type) do you set when returning HTML instead of plain 
text?  
4. How might this routing logic become harder to manage as routes grow?  
5. What benefits might a framework offer to simplify this logic?  

Answer: 
1. 404 Not Found 
2. We check: 
    req.url() to determine which page or resource the client is requesting. 
    req.method() to determine the type of HTTP operation. 
3. { 'Content-Type': 'text/html' } 
4. The switch become long and more messy and it hard to read and debug or reorganized.\ 
5. A framework like express can provide Routing abstraction, cleaner structure, easier http method handling. 

+ Answer Ex3

 Discussion Questions  
1. Why do we listen for data and end events when handling POST?  
2. What would happen if we didn’t buffer the body correctly?  
3. What is the format of form submissions when using the default browser form POST?  
4. Why do we use fs.appendFile instead of fs.writeFile?  
5. How could this be improved or made more secure?  

Answer: 
1. To collect the full request body in chunks (data) and process it only after it's fully 
received (end). 
1. Partial or corrupted data might be processed, leading to errors or incomplete form 
values. 
2. application/x-www-form-urlencoded, like: name=John+Doe. 
3. fs.appendFile adds data without erasing existing content; fs.writeFile would 
overwrite the file. 
4. Validate input, use a library (like body-parser), sanitize data, and handle 
large/malicious requests safely. 