1 – What error message do you see in the terminal when you access http://localhost:3000? What line of code causes it?

-> The error message that we see in the terminal when we access http://localhost:3000 is "res.endd is not a function".
   And the line of code that causes it is return res.endd();

Q2 – What is the purpose of res.write() and how is it different from res.end()?
-> The purpose of res.write() is used to send a chunk of the response body to the client without closing the connection. 
   It allows sending data in multiple parts.

   The purpose of res.end() signals the end of the response and closes the connection. It can also optionally send the 
   final chunk of data.

Q3 – What do you think will happen if res.end() is not called at all?
→ If res.end() is not called, the response will remain open, and the client will keep waiting forever.

Q4 – Why do we use http.createServer() instead of just calling a function directly?
-> We use http.createServer() instead of calling function because calling Calling a function directly does not start a 
   server or open a port to accept requests. http.createServer() connects your code to the Node.js networking system and 
   provides request and response objects.

Q5 – How can the server be made more resilient to such errors during development?
→ To make the server more resilient:
      + Use proper error handling.
      + Enable strict linting or TypeScript to catch typos like res.endd().
      + Add logging to trace issues easily.
      + Use unit and integration tests.
      + Use tools like nodemon to auto-restart the server and highlight runtime errors during development.