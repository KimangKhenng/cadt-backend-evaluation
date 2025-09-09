1. Why do we listen for data and end events when handling POST?
-> Because data comes with small parts(chunks).'
We use "data" to collect each part and "end" to know when it's all recieved.

2. What would happen if we didn’t buffer the body correctly?
-> We would get an broken or incompleted data and our form won't work.

3. What is the format of form submissions when using the default browser form POST?
-> The default is: application/x-www-form-urlencoded

4. Why do we use fs.appendFile instead of fs.writeFile?
->
_ fs.appendFile: add new data without delete the old data.
_ fs.writeFile: replace everything in the file.

5. How could this be improved or made more secure?
->
_ Error handling
_ Stored data securely
_ Use framework
_ Input Validation