1. Why do we listen for data and end events when handling POST?
-> We listen for data and end events when handling POST because HTTP POST data is streamed in chunks. data gathers it and end signals when it is fully recieved.

2. What would happen if we didn’t buffer the body correctly?
->If we didn’t buffer the body correctly we might process incomplete or malformed data, leading to error.

3. What is the format of form submissions when using the default browser form POST?
->The format of form submissions when using the default browser form POST It is application/x-www-form-urlencoded.

4. Why do we use fs.appendFile instead of fs.writeFile?
->We use fs.appendFile instead of fs.writeFile because we want to add data to the end of the file and not overwrite it.

5. How could this be improved or made more secure?
-> This could be improve or made more secure by 
    + limit the input length 
    + sanitize input to prevent injection attacks
    + use HTTPS to encrypt transmitted data.