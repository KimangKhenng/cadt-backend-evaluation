Q1 – What error message do you see in the terminal when you access
http://localhost:3000? What line of code causes it?

=> The error message that we see in the terminal when we access http://localhost:3000
IS “TypeError: res.endd is not a function “.
The line “ return res.endd(); “ causes the error. The correct method is “ res.end(),” but it is
misspelled.


Q2 – What is the purpose of res.write() and how is it different from res.end()?

=> The purpose of res.write(data): Sends a chunk of the response body to the client. You can call it
multiple times to send multiple parts of the response.
The differences between res.write() and res.end() is res.write() starts or continues sending
data, while res.end() finishes the response and closes the connection.


Q3 – What do you think will happen if res.end() is not called at all?

=> if res.end() is never called, the client will hang indefinitely waiting for the response to complete.
This can lead to timeouts or the page appearing to load forever.


Q4 – Why do we use http.createServer() instead of just calling a function directly?

=> http.createServer() is used to start a web server. It listens for requests from the browser (like
when you go to a website) and runs a function to handle each request.
If you just call a regular function, it will run once and then stop. It won’t wait for visitors or
know when someone is trying to connect to your server.
So, http.createServer() is like opening a door and saying, "I'm ready! Anyone who wants to visit,
come in." A regular function just runs and closes the door right away.


Q5 – How can the server be made more resilient to such errors during development?

- Use a linter or IDE: Tools like ESLint or editors like VSCode highlight syntax errors like
endd() immediately.
- Add error handling: Wrap logic in try/catch or listen for error events on the server.
- Use TypeScript: It would catch the incorrect method name at compile time.
- Automated tests: Write unit tests to verify expected behavior.
- Logging: Add logs to trace and diagnose failures.