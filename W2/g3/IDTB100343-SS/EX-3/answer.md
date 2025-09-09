1. Why do we listen for data and end events when handling POST?  
=> Because POST data comes in chunks. We must collect all chunks (data) and wait until the stream ends (end) to process the full body 

2. What would happen if we didn’t buffer the body correctly?  
=> If we didn’t buffer the body correctly, we'd get incomplete or corrupted data, especially for larger submissions. 

3. What is the format of form submissions when using the default browser form POST? 
=> Format of form submissions when using the default browser form POST is By default: application/x-www-form-urlencoded, like: 
name=John+Doe.  

4. Why do we use fs.appendFile instead of fs.writeFile?  
=> Because fs.appendFile adds new submissions to the file without overwriting while fs.writeFile would replace the entire file each time. 

5. How could this be improved or made more secure?  
=> To be improved or made more secure: 
•	Sanitize input (prevent XSS or injection) 
•	Use HTTPS 
•	Add CSRF protection 
•	Handle long/malicious payloads with size limits 
•	Use a proper web framework like Express for scaling and easier routin 
