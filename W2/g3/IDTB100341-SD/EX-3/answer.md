# Discussion Questions

<br>

## 1. Why do we listen for `data` and `end` events when handling `POST`?

**Answer:**  
Because POST data arrives in chunks; we collect them with data and finish processing at end.

<br>

## 2. What would happen if we didn’t buffer the body correctly? 

**Answer:**  
The data might be incomplete or corrupted, causing errors in parsing or missing information.

<br>

## 3. What is the format of form submissions when using the default browser form POST? 

**Answer:**  
We use `application/x-www-form-urlencoded` (e.g., name=John+Doe).

<br>

## 4. Why do we use `fs.appendFile` instead of `fs.writeFile`?

**Answer:**  
`fs.appendFile` adds to the file without overwriting; `fs.writeFile` would replace its content.


<br>

## 5. How could this be improved or made more secure?

**Answer:**  
By validating inputs, using HTTPS, sanitizing data, and preventing file injection or code execution risks.

