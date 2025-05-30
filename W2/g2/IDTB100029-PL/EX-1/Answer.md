# Q1 – What error message do you see in the terminal when you access
http://localhost:3000?? What line causes it?

Error: res.endd is not a function.
It happens because res.endd() is a typo; it should be res.end().

# Q2 – What is the purpose of res.write() and how is it different from res.end()?
res.write() sends part of the response.
res.end() finishes the response and sends it to the client.

# Q3 – What happens if res.end() is not called?
The client waits forever; the browser will keep loading.

# Q4 – Why do we use http.createServer() instead of just calling a function directly?
Because it sets up the server to handle HTTP requests and responses.

# Q5 – How can the server be made more resilient to such errors?
Use proper error handling, testing, and linters to catch typos early.
