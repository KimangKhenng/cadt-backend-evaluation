Q1.What error message do you see in the terminal when you access http://localhost:3000? What line of code causes it?
Answer: The error message is "TypeError: res.endd is not a function". The line that causes this error is the line that has
res.endd();. To fix this error we need to replace res.endd() with res.end().

Q2. What is the purpose of res.write() and how is it different from res.end()?
Answer: res.write() is used to send chunk of data as a response. It is different from res.end() in that it does not end the response.

Q3. What do you think will happen if res.end() is not called at all?
Answer: I think the response will never end or it will end a set timeout

Q4. Why do we use http.createServer() instead of just calling a function directly?
Answer: We do so to create an instance of server that can be used later on not just at the one time of the calling.

Q5. How can the server be made more resilient to such errors during development?
Answer: The error above is a syntax error. We can be resilient to this kind of errors during development by using an IDE such as VS Code,
 Web Storm, which offers tool for checking this kind of error.