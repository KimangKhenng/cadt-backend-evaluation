## Q1 – What error message do you see in the terminal when you access http://localhost:3000? What line of code causes it?  

*Error message in the terminal is TypeError: res.endd is not a function. The code error in line 5.*

---

## Q2 – What is the purpose of res.write() and how is it different from res.end()? 

*res.write() is for sending data incrementally while res.end() finalizes the response.*

---

## Q3 – What do you think will happen if res.end() is not called at all?  

*The loading will keep loading and the connection to the server will eventually lost.*

---

## Q4 – Why do we use http.createServer() instead of just calling a function directly?  

*We use http.createServer() instead of just calling a function directly because it provide necessary infrastructure for managing a server and handling multiple client connections concurrently.*

---

## Q5 – How can the server be made more resilient to such errors during development? 

*For the server to be made more resilient to error during development:*
*- Understand different error types*
*- Implement exception handling*
*- Use promises for asynchronous operations*
*- Leverage the NodeJS error object*
*- Log errors appropriately*