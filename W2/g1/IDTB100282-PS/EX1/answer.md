<!-- @format -->

Exercise 1 – Review and Analyze

Q1 – What error message do you see in the terminal when you access http://localhost:3000? What line of code causes it?

Answer: It shown an error on the line where is a type error “return res.endd()”

Q2 – What is the purpose of res.write() and how is it different from res.end()?

Answer: The purpose of res.write() is sending chunks of response to the client.
It is different from res.end() by sending parts of response but keeps the connection open unlike res.end() sending the end of response then close the connection.

Q3 – What do you think will happen if res.end() is not called at all?

Answer: If res.end() is not called at all then the client browser will keep waiting infinitely.

Q4 – Why do we use http.createServer() instead of just calling a function directly?

Answer: Because we use it to create a server that can listen for and handle the http requests. If just calling a function directly it won’t expose the network, and no one could access or reach it.

Q5 – How can the server be made more resilient to such errors during development?
Answer: To make the server more resilient to such errors during development such as:
• Using try-catch blocks to handle errors in request logic.
• Listen for error events on the server to catch the issues.
• Log errors clearly for debugging instead of crashing the server.
• Use tools like nodemon to auto-restart the server on crash.
