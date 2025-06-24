1. Why do we listen for data and end events when handling POST?
We listen for the data event to collect chunks of the request body as they arrive. The
end event tells us when all the data has been received so we can process the full body
correctly.
2. What would happen if we didn't buffer the body correctly?
If we didn’t buffer the body correctly, we might only get part of the data. This can lead to
incomplete or corrupted information being processed or saved.
3. What is the format of form submissions when using the default browser form POST?
The default format is application/x-www-form-urlencoded, which sends the form data as
key-value pairs in the request body, like name=John.
4. Why do we use fs.appendFile instead of fs.writeFile?
fs.appendFile adds new data to the end of the file without removing the existing
content. This is useful for keeping all submissions, one per line, instead of overwriting
previous data.
5. How could this be improved or made more secure?
● Validate and sanitize user input.
● Use HTTPS to secure communication.
● Limit the size of incoming data to prevent abuse.
● Use a proper framework like Express for more secure and maintainable handling.
● Handle file access errors properly.