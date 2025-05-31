# 1.Why do we listen for data and end events when handling POST?
- Because POST request data is streamed in chunks. We use data to collect those chunks and end to know when the full body has been received.
# 2.What would happen if we didn’t buffer the body correctly?
- The form data would be incomplete or corrupted, leading to incorrect or failed parsing.
# 3.What is the format of form submissions when using the default browser form POST?
- It’s application/x-www-form-urlencoded, which encodes data as key-value pairs (e.g., name=John+Doe).
# 4.Why do we use fs.appendFile instead of fs.writeFile?
- fs.appendFile adds data to the end of the file without overwriting existing content, preserving previous submissions.
# 5.How could this be improved or made more secure?
Improvements include:
- Validating and sanitizing input to prevent injection attacks
- Using HTTPS to encrypt form data
- Storing data in a database instead of plain text
- Adding error handling and input size limits
# Bonus Challenge (Optional)
- Validate that the name field is not empty before saving.
- Send back a small confirmation HTML page instead of plain text.
- Try saving submissions in JSON format instead of plain text.