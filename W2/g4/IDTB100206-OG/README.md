# week02 question and answer
## exercise 01
- Q1 What error message do you see in the terminal when you access http://localhost:3000? What line of code causes it? 
- Ans: It return “Unable to connect to remote server” res.endd() should change to res.end().

- Q2 What is the purpose of res.write() and how is it different from res.end()? 
- Ans: res.write() used to send a chunk of response body to clients.
        + different:
        -res.write(): can be call multiple times to send data in part, the connection remain open.
        -res.end(): uses with the last chunk of data, end the connection, after res.end() res.write() cannot be called.

- Q3 What do you think will happen if res.end() is not called at all? 
- Ans: The server will remain open.

- Q4 Why do we use http.createServer() instead of just calling a function directly? 
- Ans: Because it sets up a real HTTP server that listens for and responds to incoming HTTP requests.

- Q5 How can the server be made more resilient to such errors during development? 
- Ans:  •	Use http status code
        •	Provide error massage
        •	Validate the input and output
        •	Implement error handling and logging

## exercise 02
- Q1 What happens when you visit a URL that doesn’t match any of the three defined? 
- Ans: It will response with 404(not found) status code.

- Q2 Why do we check both the req.url and req.method?
- Ans: Because we want to check if the url exist or not and response to client match with the request method that they prefer.

- Q3 What MIME type (Content-Type) do you set when returning HTML instead of plain text? 
- Ans: text/html

- Q4 How might this routing logic become harder to manage as routes grow? 
- Ans: •	hard to read
       •	repetitive code
       •	difficult to maintain and scale

- Q5 What benefits might a framework offer to simplify this logic? 
- Ans: •	cleaner syntax
       •	moduler structure
       •	simplify http method handling

## exercise 03
- Q1 Why do we listen for data and end events when handling POST? 
- Ans: because POST data is sent in the request body, which arrives in chunks, not all at once.

- Q2 What would happen if we didn’t buffer the body correctly? 
- Ans: We might lost some part of the data.

- Q3 What is the format of form submissions when using the default browser form POST? 
- Ans: application/x-www-form-urlencoded

- Q4 Why do we use fs.appendFile instead of fs.writeFile? 
- Ans: Because append mode do not over write the file so we won't lost the previous data.

- Q5 How could this be improved or made more secure?
- Ans: •	validate user input
       •	set proper file permission
       •    handling error properly