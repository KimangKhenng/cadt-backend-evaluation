Q1. Why do we listen for data and end events when handling POST?
Answer: For post request, typically the client send the data to server therefore the server must retrieve the sent data
by listening for data, and the server need to end the response to indicate that all data are sent successfully or some error has
occurs.

Q2. What would happen if we didn’t buffer the body correctly?
Answer: We would not buffer the data correctly if we try to use it before the res.end(). The result would be missing data, empty data or
inaccurate data.

Q3. What is the format of form submissions when using the default browser form POST?
Answer: application/x-www-form-urlencoded. This query string format

Q4. Why do we use fs.appendFile instead of fs.writeFile?
Answer: We use appendFile because we don't want to overwrite existing data in the file.

Q5. How could this be improved or made more secure?
Answer: By validating and sanitize user input.