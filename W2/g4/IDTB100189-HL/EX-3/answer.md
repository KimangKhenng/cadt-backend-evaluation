# 📘 Native HTTP Practice – Week 2

**Practice Topics:** Native HTTP Module & Manual Routing

---

## III. Exercise 3 – Create

1. **Why do we listen for `data` and `end` events when handling POST?**  
   ➤ To collect the full POST body in chunks (`data`) and know when it's complete (`end`).

2. **What would happen if we didn’t buffer the body correctly?**  
   ➤ We would receive incomplete or broken data.

3. **What is the format of form submissions when using the default browser form POST?**  
   ➤ `application/x-www-form-urlencoded`  
   ➤ Example: `key=value&key2=value2`

4. **Why do we use `fs.appendFile` instead of `fs.writeFile`?**  
   ➤ `fs.appendFile` adds data without erasing the file, unlike `fs.writeFile`.

5. **How could this be improved or made more secure?**  
   ➤ Use best practices like:
   - Validating input
   - Limiting body size
   - Using HTTPS
   - Sanitizing data
   - Controlling access