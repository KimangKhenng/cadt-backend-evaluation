<!-- @format -->

Exercise 3 – Create
Discussion Questions

1. Why do we listen for data and end events when handling POST?

Answer: We listen for data and end events when handling POST because to handle incoming data chunks and know when the transmission ends.

2. What would happen if we didn’t buffer the body correctly?

Answer: If we didn't buffer the body correctly the data could be lost or corrupted.

3. What is the format of form submissions when using the default browser form POST?

Answer: When using the default browser form POST, the format of form submissions is application/x-www.form-urlencoded, that encodes data as key-values pairs in the body.

4. Why do we use fs.appendFile instead of fs.writeFile?

Answer: We use fs.appendFile to adds new contents without overriding or deleting the old existing data of the file.
As for fs.writeFile, we use it override the file with new contents.

5. How could this be improved or made more secure?
   Answer: It improved by validating the input, using https, setting file limits, and restricting file permissions.
