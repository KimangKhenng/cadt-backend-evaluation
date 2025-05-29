# EXERCISE 1 –REVIEW and ANALYZE

Q1–What error message do you see in the terminal when you accesshttp://localhost:3000? What line of code causes it?Answer: TypeError: res.endd is not a function. The line “return res.endd()” is what caused this error.

Q2–What is the purpose of res.write() and how is it different from res.end()?
Answer: res.write() is used to send a chunk ofdata as part ofthe response.It is different from res.end() in that it does not tell the server that the response is complete nor tell the server to send the responseback to the client.res.write() can be used multiple times unlike res.end().

Q3–What do you think will happen if res.end() is not called at all?
Answer: If res.end() is not called at all,the client will keep waiting until request time out.

Q4–Why do we use http.createServer() instead of just calling a function directly?
Answer:This is because function handlers are just for handling the requests, http.createServer() do more than that. It creates anHTTP server that can handle request, responseand network events.

Q5–How can the server be made more resilient to such errors during development?
Answer:The server can be made more resilient to errors by wrapping the request handlers inside try/catch blocks, logging the error messages instead of letting it crashthe server, and using nodemon to automatically restart the server when it crashes.
