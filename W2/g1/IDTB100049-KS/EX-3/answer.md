
# Answers to POST Request Handling Questions

## Q1 – Why do we listen for 'data' and 'end' events when handling POST requests?
**Answer**: We listen for 'data' and 'end' events when handling POST requests because we need to collect POST body chunks using 'data' and process the complete body using 'end' due to the streaming nature of the request.

## Q2 – What happens if we don’t buffer the body correctly?
**Answer**: If we don’t buffer the body correctly, it will lead to partial data, errors, client hangs, or resource leaks.

## Q3 – What is the format of a form submission when using the default browser POST method?
**Answer**: The format of a form submission when using the default browser POST method is `application/x-www-form-urlencoded`.

## Q4 – Why do we use `fs.appendFile` instead of `fs.writeFile`?
**Answer**: We use `fs.appendFile` instead of `fs.writeFile` because `appendFile` preserves previous data, making it suitable for logging submissions, while `writeFile` overwrites existing data.

## Q5 – How can this be improved or made more secure?
**Answer**: This can be improved or made more secure by implementing rate limiting, using async/await, enhancing responses, adding CSRF protection, using HTTPS, and securing file paths.
