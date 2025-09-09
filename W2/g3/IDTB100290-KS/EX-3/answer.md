❓ Discussion Questions 
1. Why do we listen for data and end events when handling POST? 
Answer:
    POST data is received in chunks (streams), so we must listen to data for chunks and end to 
know when the complete body is received. 

2. What would happen if we didn’t buffer the body correctly? 
Answer:
    The form data could be incomplete or corrupted, causing errors. 

3. What is the format of form submissions when using the default browser form POST? 
Answer:
    The format is application/x-www-form-urlencoded. 

4. Why do we use fs.appendFile instead of fs.writeFile? 
Answer:
    Because: fs.appendFile adds the new data to the end of the file without overwriting existing data 

5. How could this be improved or made more secure? 
Answer:
    This could be improve like 
        • Validate the input to prevent empty names. 
        • Use try...catch for error handling. 
        • Restrict file write access to avoid unauthorized modifications. 
        • Use HTTPS for secure data transfer.