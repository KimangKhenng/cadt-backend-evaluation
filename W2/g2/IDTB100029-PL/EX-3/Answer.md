# Q1 – Why do we listen for data and end events when handling POST?
To collect the full body of data sent by the form in chunks.

# Q2 – What would happen if we didn’t buffer the body correctly?
We would only get part of the data or incorrect results.

# Q3 – What is the format of form submissions using default browser POST?
It’s application/x-www-form-urlencoded, like name=John.

# Q4 – Why do we use fs.appendFile instead of fs.writeFile?
appendFile adds new data without deleting old entries.

# Q5 – How could this be improved or made more secure?
Validate inputs, sanitize data, handle errors, and avoid saving bad input.