Exercise 1

Answer

Q1 – What error message do you see in the terminal when you access http://localhost:3000? What line of code causes it? 

    Line number 4 return res.endd(); it have a misspelling it should be res.end(); TypeError: res.endd is not a function

 Q2 – What is the purpose of res.write() and how is it different from res.end()? 
    res.write() Sends part of the response .         res.end() Ends the response. 
Q3 – What do you think will happen if res.end() is not called at all? 
    If res.end() is missing, the server keeps the connection open forever. or load forever
 Q4 – Why do we use http.createServer() instead of just calling a function directly? 
    Because http.createServer() creates an actual HTTP server that can listen to browser requests 
    and handle them properly
 Q5 – How can the server be made more resilient to such errors during development? 
    By using tools like linters, try-catch blocks, proper error logging, and development f
    rameworks (like Express) that handle errors more gracefully


Exercise 2
Q1 - When I visit a URL that doesn't match any of the three defined, the server returns 404 not found.

Q2 - Because the same URL can behave differently depending on the method (GET, POST, etc.).

Q3 - I woule set Content-Type: text/html. This tells the browser to render the response as HTML.

Q4 - As the number of routes increases, the code becomes cluttered with nested if/else statements, making it:

-Harder to read and debug

-Prone to mistakes

-Difficult to maintain or extend

Q5 - The benefits of framework offer to simplify this logic can:

-Handle routing more cleanly with app.get(), app.post(), etc.

-Provide middleware support

-Offer better error handling

-Help manage templates, static files, and more

-Improve scalability and developer productivity


Exercise 3


Q1 - Because POST data arrives in chunks.

-data: triggered when a chunk of data is received.

-end: triggered when all data has been received.

Q2 - If we didn't buffer the body correctly, We would only receive part of the data or corrupted input. Without proper buffering, we might:

-Miss parts of the submission

-Get incomplete or malformed data

-Cause parsing errors or incorrect behavior

Q3 -By default:

application/x-www-form-urlencoded: Data is URL-encoded like: name=Somnang&email=test@example.com

-If the form includes a file upload:

multipart/form-data: Data is separated by boundaries with binary/form content.

Q4 - The reason that we use fs.appendFile instead of fs.writeFile because We use appendFile to keep a record of each submission without deleting previous ones.

Q5 - To make this improved or more secured we should:

-Validate and sanitize input to prevent injections.

-Use HTTPS to secure data in transit.

-Limit the size of incoming POST data to prevent DoS.

-Store data in a database with access controls instead of a plain .txt file.

-Add error handling (try/catch or callbacks) for file operations.