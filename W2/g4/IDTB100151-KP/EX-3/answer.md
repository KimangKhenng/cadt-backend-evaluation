1.	Why do we listen for data and end events when handling POST? 
The data event gives you chunks of the body as they arrive.
The end event signals that the entire body has been received, and you're ready to process it.

2.	What would happen if we didn’t buffer the body correctly? 
We might get an incomplete data.

3.	What is the format of form submissions when using the default browser form POST? 
application/x-www-form-urlencoded

4.	Why do we use fs.appendFile instead of fs.writeFile? 
fs.appendFile is used to add content to the end of file.
fs.writeFile is used to overwrite the entire file each time
 
5.	How could this be improved or made more secure? 
Validate and sanitize
Error handling