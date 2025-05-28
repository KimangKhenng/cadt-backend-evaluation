Q1 – What error message do you see in the terminal when you access http://localhost:3000? What line of code causes it?
Answer :
    - Message : “ TypeError: res.endd is not a function ”.
    - Line that causes code error is 5.

Q2 – What is the purpose of res.write() and how is it different from res.end()?
Answer :
    - res.write() : Sends a chunk of the response body to the client.
    - res.end() : Signals that the response is finished, no more data will be sent

Q3 – What do you think will happen if res.end() is not called at all?
Answer : If res.end() is not called at all the response to the client will never finish.

Q4 – Why do we use http.createServer() instead of just calling a function directly?
Answer : We use http.createServer() instead of just calling a function directly Because to make a real web server that keeps running, listens for browser requests, and sends back responses — unlike a normal function which runs once and stops.

Q5 – How can the server be made more resilient to such errors during development?
Answer : We can :
    - Catch errors in the request/response flow : Use a try-catch block or handle errors in the callback functions.
    - Listen for uncaught errors : Set up listeners for unexpected errors (e.g., database issues, invalid routes) so the server 
doesn't crash.
