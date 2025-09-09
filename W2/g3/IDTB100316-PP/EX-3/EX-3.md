# Exercise 3

**Q1** – We need to listen to both `data` and `end` event when handling POST because:  
- The request body is split into different chunks so it sends to us many times before it's completed.  
- We need to listen for `data` event when the chunk that got sent to us is not completed yet.  
- Then once the request body is completed, the `end` event fires and the code in `end` event gets executed.

**Q2** – If we didn’t buffer the request body correctly, data might be sent in non-completed stage, cause corruptions, memory leaks.

**Q3** – The format of form submission when using default browser form post is `application/x-www-form-urlencoded`, which sends data as key-value pairs separated by `&` characters, with keys and values separated by `=`. Special characters are URL-encoded.

**Q4** – We use `fs.appendFile` instead of `fs.writeFile` to add new data to file because `fs.writeFile` would overwrite the file and cause data that was written in the file to be lost.

**Q5** – This could be improved or made more secure by adding error handling or use built-in framework that help reduce redundant code, and made to be more secure.
