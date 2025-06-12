# Exercise 3

## ❓ Discussion Questions

### 1. Why do we listen for `data` and `end` events when handling POST?

**Answer:**
Because POST data arrives in chunks, especially with larger payloads. We use the `data` event to collect incoming chunks, and `end` signals completion. Only after `end` can we safely parse the full request body.

### 2. What would happen if we didn’t buffer the body correctly?

**Answer:**
The data would be incomplete or corrupted, leading to parsing errors. We might miss part of the user's input or receive it in broken pieces.

### 3. What is the format of form submissions when using the default browser form POST?

**Answer:**
By default, forms use `application/x-www-form-urlencoded`. This encodes fields like a query string: `key1=value1&key2=value2`. Each input becomes a key-value pair in the request body.

### 4. Why do we use `fs.appendFile` instead of `fs.writeFile`?

**Answer:**
`fs.appendFile` adds data to the end of the file without erasing existing content. In contrast, `fs.writeFile` overwrites the entire file each time. We use `append` to keep a growing log of form submissions.

### 5. How could this be improved or made more secure?

**Answer:**
To enhance security, always validate and sanitize user input to prevent injection attacks. Implement HTTPS to encrypt data during transmission and ensure safe communication.
