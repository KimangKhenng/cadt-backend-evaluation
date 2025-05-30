1. Why do we listen for data and end events when handling POST?  
    ➢ Because to collect the incoming request body in chunks (data) and know when 
    it's fully received (end).
2. What would happen if we didn’t buffer the body correctly?  
    ➢ We might only get part of the data, leading to incomplete or corrupted input. 
3. What is the format of form submissions when using the default browser form POST?  
    ➢ It’s application/x-www-form-urlencoded 
4. Why do we use fs.appendFile instead of fs.writeFile?  
    ➢ appendFile adds new data without deleting old data and  writeFile overwrites the 
    file. 
5. How could this be improved or made more secure?  
    ➢ Validate inputs, sanitize data, use HTTPS, and limit file access/permissions.