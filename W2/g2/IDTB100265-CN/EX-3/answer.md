1. Why do we listen for data and end events when handling POST?
➢ We listen for data and end events when handling POST because HTTP request bodies are
streamed—not received all at once.

2. What would happen if we didn’t buffer the body correctly?
➢ If we didn’t buffer the body correctly, we may try to parse incomplete data, leading to
null or undefined, missing fields or corrupt form submissions.

3. What is the format of form submissions when using the default browser form POST?
➢ Content-Type: application/x-www-form-urlencoded

4. Why do we use fs.appendFile instead of fs.writeFile?
➢ We use fs.appendFile instead of fs.writeFile because fs.writeFile would re-write the file
completely but we want to keep appending the data that received instead of re-writing it.

5. How could this be improved or made more secure?
➢ We could improve the security by:
- Check the name is not empty
- Ensure submissions.txt is not publicly accessible
- Handle file errors gracefully
- Log requests, errors, and unusual activity.