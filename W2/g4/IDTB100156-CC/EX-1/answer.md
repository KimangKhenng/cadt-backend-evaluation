Q1 – What error message do you see in the terminal when you access http://localhost:3000? What line of code causes it? 
Answer: curl: Unable to connect to the remote server
		   Line: return res.endd();
 
Q2 – What is the purpose of res.write() and how is it different from res.end()? 
Answer: The purpose of res.write() is to send data in the body of an HTTP response.
The differences between res.write() and res.end(): res.write() transmits chunks of the 	   response body to the client, allowing for incremental  data transfer, and can be called    multiple times. Meanwhile, res.end() singnals the completion of the response, optionally sending the final chunk of data, and can only be called once per response.

Q3 – What do you think will happen if res.end() is not called at all? 
Answer: If res.end() is not called at all, the server will keep running and request can’t be completed.
 
Q4 – Why do we use http.createServer() instead of just calling a function directly? 
Answer: We use http.createServer() because it sets up a real web server that can listen for HTTP requests from browsers or clients. If we just call a function directly, it will run once and stop and it won’t wait for any requests. The server keeps running and responds whenever someone sends a request, like when we visit a website.
  
Q5 – How can the server be made more resilient to such errors during development?
Answer: We improve server resilience during development by handling errors carefully, validating input, and using tools like nodemon to recover quickly from crashes.
