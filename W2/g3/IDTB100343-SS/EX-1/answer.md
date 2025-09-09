1. What error message do you see in the terminal when you access http://localhost:3000? What line of code causes it?
=> TypeError: res.endd is not a function
=> the error comes from the line: res.endd() 

2. What is the purpose of res.write() and how is it different from res.end()?
=> res.write() sends a message to the browser.(send data)
=> res.end() ends the message and tells the browser it’s done.(finish sending)

3. What do you think will happen if res.end() is not called at all?
=> The browser will keep loading and wait forever. The page won’t show anything because the server hasn’t said it’s finished.

4. Why do we use http.createServer() instead of just calling a function directly?
=> Because http.createServer() makes a real web server that listens to requests and sends responses. A normal function can’t do that by itself.

5. How can the server be made more resilient to such errors during development?
_ Add error handling (try...catch)
_ Use tools like Nodemon to auto-restart
_ Use a framework like Express to make things easier and safer