# Discussion Questions

### 1. Why do we listen for `data` and `end` events when handling POST?
→ POST data arrives in chunks.  
→ `data` gathers them, `end` signals it's all received.

---

### 2. What would happen if we didn’t buffer the body correctly?
→ Incomplete or corrupted data will be parsed, leading to bugs or data loss.

---

### 3. What is the format of form submissions when using the default browser form POST?
→ `application/x-www-form-urlencoded` (e.g., `name=nuka`)

---

### 4. Why do we use `fs.appendFile` instead of `fs.writeFile`?
→ `appendFile` adds to the file without deleting previous entries.

---

### 5. How could this be improved or made more secure?

- Sanitize input  
- Validate content  
- Limit input size  
- Use HTTPS  
- Store in a database instead of flat files

---

## Bonus Challenge (Optional)

- Validate that the **name** field is not empty before saving  
- Send back a small **confirmation HTML page** instead of plain text  
- Try saving submissions in **JSON format** instead of plain text
