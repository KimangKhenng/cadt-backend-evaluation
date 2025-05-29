## 1. Why do we listen for data and end events when handling POST?
Because when a user submits a form the POST, the data is sent in chunks.
### 2. What would happen if we didn’t buffer the body correctly?
If we didn’t buffer the body correctly, we will only get partial data or nothing from the
data.
### 3. What is the format of form submissions when using the default browser form POST?
application/x-www-form-urlencoded
### 4. Why do we use fs.appendFile instead of fs.writeFile?
Because fs.appendFile adds new content to the end of the file without deleting what’s
already in there.
### 5. How could this be improved or made more secure?
This could be improved by using input validation, limit input size, file security, use
HTTPS.
