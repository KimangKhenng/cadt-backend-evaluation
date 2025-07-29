## 1. Why do we listen for data and end events when handling POST?  

*It’s necessary to listen for the data and end events due to the way data is transmitted in the streams. By listening for the event the server can progressively collect the incoming data.*

---

## 2. What would happen if we didn’t buffer the body correctly?  

*If we didn’t buffered the body correctly:*
*- Data loss or corruption*
*- Memory overload*
*- Security risks*
*- Blocked event loop*
*- Encoding issues*

---

## 3. What is the format of form submissions when using the default browser form POST? 

*The format of form submissions when using the default browser form POST is Plain Text.*

---

## 4. Why do we use fs.appendFile instead of fs.writeFile?  

*We use fs.appendFile instead of fs.writeFile because we want to keep the old information, we don’t want to overwrite the old one.*

---

## 5. How could this be improved or made more secure?  

*To improve and made more secure we can:*
*- Sanitize inputs to prevent XSS.*
*- Use https to encrpt data*
*- Add security headers*
*- Switch to express.js (cleaner routing + built-in safely)*