Q1 – What error message do you see in the terminal when you access 
http://localhost:3000? What line of code causes it?  
    ➢ Line 5 causes endd() is not function. 
Q2 – What is the purpose of res.write() and how is it different from res.end()?  
    ➢ It is used to send chunks of data to the client as part of the HTTP response body. 
    ➢ it different from res.end()is  
        o res.end use for final response or  when you are done sending all the data and 
          want to close the response. 
        o res.write is it not end response. 
Q3 – What do you think will happen if res.end() is not called at all?  
    ➢ It will not call server and response will not finish that client wait for the end response. 
Q4 – Why do we use http.createServer() instead of just calling a function directly?  
    ➢ Because function can’t do on its own.  
Q5 – How can the server be made more resilient to such errors during development? 
    ➢ Ensure all requests are properly ended 
    ➢ Catch and handle all errors 
    ➢ Use tools that help catch and recover from mistakes early 