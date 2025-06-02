# Exercise 3

### 1. Why do we listen for `data` and `end` events when handling POST?

**Answer:**  
We listen for `data` and `end` events to collect incoming POST body data. Since data arrives in chunks (due to Node.js being stream-based), `data` captures each chunk, and `end` signals when all data has been received, allowing us to process the complete request body.

---

### 2. What would happen if we didn’t buffer the body correctly?

**Answer:**  
If the body isn't buffered correctly, we might only process partial data or corrupt input. This can cause application errors, failed form submissions, incomplete writes, or leave the client hanging without a proper response.

---

### 3. What is the format of form submissions when using the default browser form POST?

**Answer:**  
The default submission format is:  
`application/x-www-form-urlencoded`

This encodes form data in a key=value pair format separated by `&`.

---

### 4. Why do we use `fs.appendFile` instead of `fs.writeFile`?

**Answer:**  
We use `fs.appendFile` to add new content to the end of an existing file without removing its current contents. This is useful for logging or saving multiple submissions. In contrast, `fs.writeFile` overwrites the entire file.

---

### 5. How could this be improved or made more secure?

**Answer:**  
Improvements and security measures could include:
- Adding rate limiting to prevent spam
- Using `async/await` for better async handling
- Sending user-friendly and consistent responses
- Adding CSRF protection
- Using HTTPS to encrypt data
- Sanitizing and validating input
- Ensuring secure file path handling to avoid directory traversal
