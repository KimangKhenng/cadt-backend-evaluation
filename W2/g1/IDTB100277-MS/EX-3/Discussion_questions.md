# EXERCISE 3–Discussion_Questions

1. Why do we listen for data and end events when handling POST?
   Answer: We do that because data are sent in chunksinstead of in one go. Data represents the data sending in chunk, while end represents the end of the data which tell us there is no more chunk to retrieve.

2. What would happen if we didn’t buffer the body correctly?Answer: If we didn’t buffer the body correctly, some chunks of the data in the body wouldbe lostcausing unwanted errorsfor the clients that requesting to the server.

3. What is the format of form submissions when using the default browser form POST?
   Answer: The format for that is “application/x-www-form-urlencoded”, which is a content-type.

4. Why do we use fs.appendFile instead of fs.writeFile?
   Answer: We use fs.appendFIle instead because we want to write the name to a new line and not overwritethe old file with the new name.

5. How could this be improved or made more secure?
   Answer: To improve this code, we can try wrapping them in try and catch block, using specialized frameworks to simplify routing and use input validation.
