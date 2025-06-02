EXERCISE 3 – CREATE
 Discussion Questions
1. Why do we listen for data and end events when handling POST?
We listen for data and end events when handling POST because we needed to
collect POST body chunks by using 'data' and process the complete body using
'end' due to streaming nature.

2. What would happen if we didn’t buffer the body correctly?
If we didn’t use buffer the body correctly, it will leads to partial data, errors, client
hangs, or resource leaks.

3. What is the format of form submissions when using the default browser form POST?
The format of form submission when using the default browser from POST by
using application/x-www-form-urlencoded.

4. Why do we use fs.appendFile instead of fs.writeFile?
We use fs.appendFile instead of fs.writeFile because appendFile preserves previous data, suitable for logging submissions, while writeFile overwrites.

5. How could this be improved or made more secure?
This can be improved or made more secure by using rate limit, use async/await,
enhance responses, add CSRF protection, HTTPS, and secure file paths.
