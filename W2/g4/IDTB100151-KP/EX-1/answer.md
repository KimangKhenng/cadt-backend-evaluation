Q1 – What error message do you see in the terminal when you access http://localhost:3000? What line of code causes it? 
It said curl: (56) Recv failure: Connection was reset
The cause is res.endd() is not a function it should be res.end().

Q2 – What is the purpose of res.write() and how is it different from res.end()? 
res.write() is used to send a chuck of data. 
res.end() is used to finalized and send the respond.

Q3 – What do you think will happen if res.end() is not called at all? 
If the res.end() is not called then the client will have to keep waiting until time out.

Q4 – Why do we use http.createServer() instead of just calling a function directly? 
Because createServer() method can turn the computer into http server. It can listen to port, execute function, a requestListener, each time a request is made.

Q5 – How can the server be made more resilient to such errors during development? 
To make a server more resilient we can 
•	Return structured error responses (like JSON with status codes) to help debugging.
•	Check spelling
•	Use try-catch block
•	Validate user input to prevent injection attacks and logical errors.
