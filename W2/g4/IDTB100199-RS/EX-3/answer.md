## Exercise 3

### 1. Why do we listen for `data` and `end` events when handling POST?  
- The request body is streamed; `data` events emit chunks, and `end` signals completion, so we know when all data has been received.  

### 2. What would happen if we didn’t buffer the body correctly?  
- Parsing would break (incomplete data), or you might attempt to parse before all chunks arrive, leading to errors.  

### 3. What is the format of form submissions when using the default browser form POST?  
- `application/x-www-form-urlencoded`, where keys and values are URL-encoded and joined with `&`.  

### 4. Why do we use `fs.appendFile` instead of `fs.writeFile`?  
- `fs.appendFile` adds to the end of the file without overwriting existing content; `fs.writeFile` would replace the file each time.  

### 5. How could this be improved or made more secure?  
- Store structured JSON instead of plain text.  
- Use HTTPS.  
- Handle file errors and race conditions.