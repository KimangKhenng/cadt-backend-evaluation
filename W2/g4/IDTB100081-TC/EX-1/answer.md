### 1. What error message do you see in the terminal when you access http://localhost:3000? What line of code causes it?
-> The error is  
return res.endd(); 
^ 
TypeError: res.endd is not a function 
at Server.<anonymous> (D:\Year2Term3\BackEnd\Week2\StartCode\test.js:5:16) 
at Server.emit (node:events:518:28) 
– 
at parserOnIncoming (node:_http_server:1153:12) 
at HTTPParser.parserOnHeadersComplete (node:_http_common:117:17) 
The line that cause it is line 5 with the code res.endd(); 
### 2. What is the purpose of res.write() and how is it different from res.end()?  
-> The purpose of res.write() is to send response body back to client. It difference from res.end() 
that it can call multiple time in the code and not specify the end point of the response like 
res.end() . 
### 3. What do you think will happen if res.end() is not called at all?  
-> If res.end() is not called at all the client side will end for the response and the browser will hang 
forever wait for the response to time out. 
### 4. Why do we use http.createServer() instead of just calling a function directly?  
-> We use http.createServer() instead of just call a function because by doing this it will set up the 
network service that can listen and handle HTTP. 
### 5. How can the server be made more resilient to such errors during development?  
-> To make server more resilient we have to wrap the logic in try catch statement and always set
time out for server to time out to prevent it from loading forever and also always use res.end() .