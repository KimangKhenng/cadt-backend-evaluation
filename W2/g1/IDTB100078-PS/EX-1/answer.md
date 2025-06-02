EXERCISE 1 – REVIEW and ANALYZE

Q1 – What error message do you see in the terminal when you access
http://localhost:3000? What line of code causes it?
 return res.endd();
        	  ^
TypeError: res.endd is not a function
-> Because there is d in res.end”d”();

Q2 – What is the purpose of res.write() and how is it different from res.end()?
res.write() is used to send a chunk of the response body to the client without ending the response, while res.end() signals that the response is complete and no more data will be sent.

Q3 – What do you think will happen if res.end() is not called at all?
The server will not know when to stop responding so it will cause the website to keep loading and spinning eventually it will crash or timeout.

Q4 – Why do we use http.createServer() instead of just calling a function directly?
We use http.createServer() to create an HTTP server that listens for and handles incoming HTTP requests automatically, enabling us to build web servers. Calling a function directly wouldn't set up a server or handle requests over the network.

Q5 – How can the server be made more resilient to such errors during development?
To make the server more resilient to errors during development, you can:
Use try-catch blocks to handle exceptions in synchronous code.


Listen for error events on the server and streams.