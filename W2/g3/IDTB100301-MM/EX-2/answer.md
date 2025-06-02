# EXERCISE 1   ANALYZE 

<br>

## Q1 – What error message do you see in the terminal when you access `http://localhost:3000?` What line of code causes it?

**Error:**  
`TypeError: res.endd is not a function`  

**Line of Code That Caused It:**  
The error is caused on line 4 with the following code:
```js
return res.endd();
```
**Correction:**
```js
return res.end();
```

<br>

## Q2 – What is the purpose of `res.write()` and how is it different from `res.end()`? 

**Purpose of `res.write()`:**
It sends a chunk of the response body to the client. It can be called multiple times to stream data.    
**Purpose of `res.end()`:**
It ends the response and sends it to the client. It can optionally sen d a final chunk of data before closing the connection.

**Key Difference:**
```js
res.write() // starts or continues the response stream.  
res.end() // finalizes and closes the response.
```

<br>

## Q3 – What do you think will happen if `res.end()` is not called at all?

**Answer:** The server won’t finish the response and the client will hang waiting for the rest of the data or will eventually timeout.

<br>

## Q4 – Why do we use `http.createServer()` instead of just calling a function directly?


**Answer:** Because `http.createServer()` wraps your handler `function ((req, res) => {})` with an HTTP server that:    
• Listens for incoming connections.     
• Parses HTTP requests.     
• Manages TCP connections, headers, and protocol-level operations   

**Without it, you would need to handle low-level networking and HTTP protocol tasks manually.**

<br>

## Q5 – How can the server be made more resilient to such errors during development?
**Answer:** Use a `try-catch` block around your server logic. This catches runtime errors like typos and prevents the server from crashing.

**Example:**
```js
const http = require('http');

const server = http.createServer((req, res) => {
    try {
        res.write('Hello, World!');
        return res.end();
    } catch (error) {
        console.error('An error occurred:', error);
        res.statusCode = 500;
        res.end('Internal Server Error');
    }
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
```
**This approach helps:**    
• Prevent server crashes caused by unexpected errors.  
• Provide clear error messages during development.     
• Improve stability and debugging.  

<br>

---
