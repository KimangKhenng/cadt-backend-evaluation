Discussion Questions

1. Why do we listen for data and end events when handling POST?
Answer : We listen for the data event to gather the chunks of data as they arrive and the end event to know when the data is fully received, so we can process and respond to the request.

2. What would happen if we didn’t buffer the body correctly?
Answer : If we didn’t buffer the body correctly :
    - Data might be missing
    - Parsing won't work
    - Wrong responses

3. What is the format of form submissions when using the default browser form POST?
Answer : The format of form submissions when using the default browser form POST is URL-encoded format (Example : name=Leng+Menghan&email=han%40gmail.com)

4. Why do we use fs.appendFile instead of fs.writeFile?
Answer : We use fs.appendFile instead of fs.writeFile because we want to add new data to an existing file without overwriting the current content.

5. How could this be improved or made more secure?
Answer : We could :
    - Validate Input: Prevent malicious data.
    - Error Handling: Avoid crashes and unexpected behavior.
    - Limit Access: Restrict who can modify files.
    - Backups: Protect against data loss
