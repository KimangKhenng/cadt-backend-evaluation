# EXERCISE 1 – REVIEW and ANALYZE 

Q1 – What error message do you see in the terminal when you access http://localhost:3000? What line of code causes it?  
Ans: There is error in this res.end();.  There are double d for “end” word 
  
Q2 – What is the purpose of res.write() and how is it different from res.end()?  
Ans:  
res.write() is for sending data in chunks, usually when you want to multiple parts. After using 
res.write(), the connection between client and server remain open.  
res.end() is for sending individual data or the last data, after the res.end() is called. After using 
res.end(), the connection will closed and no more data can be sent to the client. 
  
  
Q3 – What do you think will happen if res.end() is not called at all?  
Ans:  
If res.end() is not called, the server does not signal that the response is complete. As a result, 
the client will keep waiting for more data, and the website is loading indefinitely. 
  
  
Q4 – Why do we use http.createServer() instead of just calling a function directly?  
Ans: 
We use http.createServer() because it contains a built code that set up a real HTTP server. It 
handles important tasks such as HTTP method, managing client-server request and respond, 
and listening on a specific port. Without http.createServer(), the program cannot listen for 
incoming requests from clients, meaning it wouldn’t function as a web server. 
   
  
Q5 – How can the server be made more resilient to such errors during development?  
Ans: 
    There are multiple ways that developers can do to make the server more resilient to error 
    during development such as:  
    1. HTTP response status code: This allows developers to know what is the client request 
    problem based on the code number. 
    2. Error handling: developers can you error handling such as try-catch to catch the error if 
    there are any without crashing the program. 
    3. Printing error message for debugging: when thing go wrong, developers can print out 
    error to check and define the cause of error.

# EXERCISE 2 – MANIPULATE 
Reflective Questions  

1. What happens when you visit a URL that doesn’t match any of the three defined?  
Ans: It will display 404 not found with HTTP code 404, as we have define in else (if 
statement) and default (switch) 

2. Why do we check both the req.url and req.method?  
Ans: both URL and method are required to check because same URL can contain different HTTP methods. For example:URL is /products, the method could be: GET /products, POST /products, DELETE /products, PUT /products. Each method serves a different purpose even though the URL is the same. 

3. What MIME type (Content-Type) do you set when returning HTML instead of plain text?  
Ans:  
Returning HTML: Content-type: text/html 
Returning plain text: Content-type: text/plain 

4. How might this routing logic become harder to manage as routes grow?  
Ans: As the routes grow, the code becomes harder to manage since there are a lot of repeated patterns. This can make the code hard to read, and more human-error when updating or adding new routes. 

5. What benefits might a framework offer to simplify this logic?  
Ans: A framework offers quicker option, cleaner and shorter syntax compare to manual routing.

# EXERCISE 3 – CREATE  
Discussion Questions  

1. Why do we listen for data and end events when handling POST?  
Ans: because POST requests sends data to client in chunks so listen for data is for receiving chunks of data and combine them while listen for end is used to close the connection. 

2. What would happen if we didn’t buffer the body correctly?  
Ans: If we didn’t buffer the body correctly, clients might only receive part of the data. 

3. What is the format of form submissions when using the default browser form POST?  
Ans: The default format is application/x-www-form-urlencoded. 

4. Why do we use fs.appendFile instead of fs.writeFile?  
Ans: We use fs.appendFile to write new data after old data, not overwrite them. 

5. How could this be improved or made more secure?  
Ans: This can be improved by:  
Input validation: checking if the input is empty or is it in the correct format? 
Clean the input after clicking submit. 