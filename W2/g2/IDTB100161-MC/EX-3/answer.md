1. Why do we listen for data and end events when handling POST?
=> Because POST data comes in chunks, especially for larger inputs. data gives you each
chunk, and end tells you when all data has arrived.


2. What would happen if we didn’t buffer the body correctly?
=> You might get incomplete or corrupted data, as you wouldn’t have the full request body
when you try to process it.


3. What is the format of form submissions when using the default browser form POST?
=> It sends data in application/x-www-form-urlencoded format, like: name=John+Doe


4. Why do we use fs.appendFile instead of fs.writeFile?
=> Because appendFile adds each new name to the file without deleting previous ones.
writeFile would overwrite the file each time.


5. How could this be improved or made more secure?
• Validate input (e.g., make sure name isn't empty or malicious).
• Escape special characters.
• Rate limit to prevent spam.
• Use HTTPS to secure data in transit.
• Consider using a framework like Express with body-parser for easier handling.