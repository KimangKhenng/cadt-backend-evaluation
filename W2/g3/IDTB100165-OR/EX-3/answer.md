
# Exercise 3
## Discussion Question
## Q1 – Why do we listen for data and end events when handling POST?

We listen to:
- data event to collect chunks of data as they arrive.
- end event to know when all data has been received and it's safe to
process it.

---

## Q2 – What would happen if we didn’t buffer the body correctly?

If we skip buffering:

- We might try to process incomplete data.
- Parsing errors may occur.
- Your app might behave unpredictably or even crash.

---

## Q3 – What is the format of form submissions when using the default browser form POST?

application/x-www-form-urlencoded

---


## Q4 – Why do we use fs.appendFile instead of fs.writeFile?

fs.appendFile() adds new data without overwriting existing content.
fs.writeFile() replaces the entire file each time.


---


## Q5 – How could this be improved or made more secure?

Some improvements:
- Input validation (e.g., check that name is not empty or malicious) 
- Sanitize inputs to prevent code injection or HTML injection
- Use HTTPS to protect data in transit
- Limit request size to prevent denial-of-service (DoS) attacks
- Store data in structured formats (like JSON or databases)
---
