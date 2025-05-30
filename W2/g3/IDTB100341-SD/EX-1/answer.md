# EXERCISE 1 ANALYZE

<br>

## Q1 – What error message do you see in the terminal when you access `http://localhost:3000?` What line of code causes it? 
**Answer**:  
It showed `res.endd()` is not a fucntion, it is caused on line 5.  
**correct**:
```js
res.end()
```

<br>

## Q2 – What is the purpose of res.write() and how is it different from res.end()? 
**`res.write()`:**
sends part of the response  
**`res,end():`**
finishes and sends the complete response

<br>

## Q3 – What do you think will happen if res.end() is not called at all?

**Answer:**  
If `res.end()` is not called, the client will keep waiting and the response will hang, eventually leading to a timeout.

<br>

## Q4 - Why do we use http.createServer() instead of just calling a function directly? 

**Answer:**  
We use `http.createServer()` to create an HTTP server that listens for and handles client requests—just calling a function wouldn't set up the server or handle HTTP connections.

<br>

## Q5 – How can the server be made more resilient to such errors during development?

**Answer:**  
Use a try-catch block inside the request handler and add a global error handler to catch unexpected issues.