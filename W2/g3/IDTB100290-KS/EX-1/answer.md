Q1 – What error message do you see in the terminal when you access http://localhost:3000? What line of code causes it? 
Answer:
        Message Error in terminal: TypeError: res.endd is not a function 
        Error  in line: 5 
Q2 – What is the purpose of res.write() and how is it different from res.end()? 
Answer:
        res.write() is used to send a chunk of the response body to the client without ending the response, allowing for multiple writes. 

        res.end() sends the final part of the response and signals that the response is complete, ending the communication. 

Q3 – What do you think will happen if res.end() is not called at all? 
Answer:
        If res.end() is not called, the response will remain open, causing the client to keep waiting 
        indefinitely for the server to finish sending data. This can lead to a hanging request and may 
        eventually cause a timeout 

Q4 – Why do we use http.createServer() instead of just calling a function directly? 
Asnwer:

        http.createServer() sets up a server that can listen for client requests over the internet, while a 
        normal function cannot do this. 
        
Q5 – How can the server be made more resilient to such errors during development? 
Answer:
        We can use : 
        Use try...catch to catch errors. 
        Set a time limit so requests don’t hang. 
        Use nodemon to auto-restart the server on code changes. 
