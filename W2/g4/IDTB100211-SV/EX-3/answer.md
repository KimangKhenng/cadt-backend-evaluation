# Handling POST Requests Questions

### 1. Why do we listen for `data` and `end` events when handling POST?
To **collect the full request body in chunks** before processing it.

---

### 2. What would happen if we didn’t buffer the body correctly?
We may get **incomplete or corrupted data**.

---

### 3. What is the format of form submissions when using the default browser form POST?
`application/x-www-form-urlencoded` (e.g., `key=value&key2=value2`)

---

### 4. Why do we use `fs.appendFile` instead of `fs.writeFile`?
To **add to the file without overwriting** existing content.

---

### 5. How could this be improved or made more secure?
- **Sanitize input**
- **Validate data**
- **Handle errors**
- **Limit request size**
