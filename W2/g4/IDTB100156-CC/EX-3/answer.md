Discussion Questions 
1.	Why do we listen for data and end events when handling POST? 
2.	What would happen if we didn’t buffer the body correctly? 
3.	What is the format of form submissions when using the default browser form POST? 
4.	Why do we use fs.appendFile instead of fs.writeFile? 
5.	How could this be improved or made more secure? 
Answer:
1.	We listen for data and events in a POST request because the data is sent in small chunks. The data event collects each chunk, and the end event tells us when all the data has been received, so we can safely process it.
2.	If we didn’t buffer the body correctly, we might get only part of the data or nothing at all. This could cause errors when trying to parse the form data or result in missing information.
3.	The default format of form submissions with a browser POST is application/x-www-form-urlencoded.
4.	We use fs.appendFile instead of fs.writeFile to add new data to the end of the file without deleting the existing content. If we used fs.writeFile, it would overwrite the whole file each time.
5.	We could improve the code by validating the input, handling errors more carefully, and not trusting any data directly. We could also limit the size of the request and use HTTPS to protect the data being sent.
