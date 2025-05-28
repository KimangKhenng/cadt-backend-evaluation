
### 1. Why do we listen for `data` and `end` events when handling POST?
- `data` event allows the server to receive and process incoming data in chunks.
- `end` event signals that all data has been received, so the server can start processing and send a response.

### 2. What would happen if we didn’t buffer the body correctly?
- **Incomplete Data:** The server might miss data.
- **Data Loss:** Some data may not be received.

### 3. What is the format of form submissions when using the default browser form POST?
- Default form POST uses `application/x-www-form-urlencoded`, sending data as **key-value pairs**.

### 4. Why do we use `fs.appendFile` instead of `fs.writeFile`?
- Because we want to **add data to the end** of a file, while `fs.writeFile` overwrites the entire file.

### 5. How could this be improved or made more secure?
- Use **HTTPS** for security.
- Add **input validation** to handle and sanitize user data.