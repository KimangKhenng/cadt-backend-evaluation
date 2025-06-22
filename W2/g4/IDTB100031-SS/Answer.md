EXERCISE 1 - ANALYZE
Q1 – What error message do you see in the terminal when you access 
    http://localhost:3000? What line of code causes it? 
    • curl: (56) Recv failure: Connection was reset 
    • the line of code that causes it is:   return res.endd(); 
    • the correct line should be:  return res.end(); 
Q2 – What is the purpose of res.write() and how is it different from res.end()? 
    • res.write() is a method in Node.js is used to send a chunk of the response body to the 
    client. 
    • The different between res.write() and res.end() is that: 
    o res.write() : send data to the client 
    o res.end() : send the signal of the completion of the response to the client.  
Q3 – What do you think will happen if res.end() is not called at all? 
    • If res.end() is not called at all, it will cause many problems like: 
    o Hanging request: The client will continue to wait for the response from the 
    servers  
Q4 – Why do we use http.createServer() instead of just calling a function directly? 
    • The reason why we use http.createserver() instead of just calling a function directly 
    because http.createserver() method turn our computer into HTTP server. Without HTTP 
    server, a web server is unable to receive and process requests from web browsers, 
    meaning websites cannot be accessed. 
Q5 – How can the server be made more resilient to such errors during development? 
    • To make a server more resilient during development, focus on proactive error handling, 
    redundancy, and testing. Implement try-catch blocks, monitor for errors in real-time, 
    and use chaos testing to simulate failures.

EXERCISE 2 – MANIPULATE 
1. What happens when you visit a URL that doesn’t match any of the three defined? 
    • The response will be: 404 Not Found 
2. Why do we check both the req.url and req.method? 
    • The reason why we need to check both the req.url and req.method because: 
    o req.url : check path of the client’s request 
    o req.method :  enable clients to specify the action they'd like to perform on a 
    given resource. 
3. What MIME type (Content-Type) do you set when returning HTML instead of plain 
    text? 
    • Text/html 
4. How might this routing logic become harder to manage as routes grow? 
    • As routes grow this routing logic become harder to manage for several reason such as 
    code become messy and hard to read, Poor Scalability, harder to implement, and hard 
    to debug.  
5. What benefits might a framework offer to simplify this logic? 
    • The benefits that frame work offer are: 
    o Saves time by cutting down on repetitive code 
    o Runs tasks faster, especially those involving data input/output 
    o Can handle many users at once without slowing down 
    o Strong support from a big community of developers 
    o Lets you use code across different platforms 
    o Can be adjusted easily to fit your project needs 
    o Node.js frameworks have tools for tasks like directing traffic and connecting to 
    databases.

EXERCISE 3 – CREATE 
1. Why do we listen for data and end events when handling POST? 
    • POST data can be large and comes in chunks, not all at once. We buffer it piece by piece 
    in the data event and handle it once complete with the end event. 
2. What would happen if we didn’t buffer the body correctly? 
    • The request body might be incomplete or malformed, leading to parsing errors, missing 
    data, or crashes. 
3. What is the format of form submissions when using the default browser form POST? 
    • application/x-www-form-urlencoded  
4. Why do we use fs.appendFile instead of fs.writeFile? 
    • appendFile adds content to the file without deleting previous data. writeFile overwrites 
    the file by default. 
5. How could this be improved or made more secure? 
    • Sanitize inputs to prevent injection. 
    • Limit input length and characters. 
    • Use HTTPS to encrypt form data. 
    • Save submissions to a database instead of a text file. 
    • Rate-limit or CAPTCHA to prevent spam. 