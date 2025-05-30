# Handling POST Requests in Node.js

## Q1 – Why do we listen for data and end events when handling POST?

- To collect the data chunks sent by the client and process them once the entire body is received.

## Q2 – What would happen if we didn’t buffer the body correctly?

- The data might be incomplete or corrupted, leading to errors in processing the request.

## Q3 – What is the format of form submissions when using the default browser form POST?

- application/x-www-form-urlencoded.

## Q4 – Why do we use fs.appendFile instead of fs.writeFile?

- fs.appendFile adds new data to the end of the file without overwriting existing content.

## Q5 – How could this be improved or made more secure?

- Validate the input data, handle errors more gracefully, and consider using HTTPS for secure communication.
