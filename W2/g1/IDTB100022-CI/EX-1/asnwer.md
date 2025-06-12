# Exercise 1

## Q1 – What error message do you see in the terminal when you access [http://localhost:3000](http://localhost:3000)?

**Answer:**
`localhost refused to connect.` This is caused by a typo in the code on line 5:

```js
res.endd(); // incorrect spelling
```

## Q2 – What is the purpose of `res.write()` and how is it different from `res.end()`?

**Answer:**
`res.write()` sends a chunk of the response body to the client but does **not** end the response.
`res.end()` signals that you are done sending the response and ends it.

## Q3 – What do you think will happen if `res.end()` is not called at all?

**Answer:**
The client will keep waiting for the server to finish responding, resulting in a page that keeps loading indefinitely. This can also lead to errors similar to the one in Q1.

## Q4 – Why do we use `http.createServer()` instead of just calling a function directly?

**Answer:**
We use `http.createServer()` to create a real HTTP server that listens for incoming requests.
Calling a function directly won't expose your code to the network or handle HTTP protocols.
`http.createServer()` connects your logic to actual web traffic via request and response objects.

## Q5 – How can the server be made more resilient to such errors during development?

**Answer:**
Wrap your server logic in `try-catch` blocks to handle errors gracefully. This helps catch and log issues without crashing the server.
