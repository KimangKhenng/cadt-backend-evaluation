# EXERCISE 3  CREATE  

<br>

## 1. Why do we listen for `data` and `end` events when handling `POST`?
**Answer:** Because POST request bodies are streamed in chunks.  
We use:
- `data`: To collect chunks of incoming data.
- `end`: To signal that the entire body has been received and can now be processed.

<br>

## 2. What would happen if we didn’t buffer the body correctly?

**Answer:** If we don’t properly buffer the incoming data:
- Some or all of the form data may be missed.
- This can lead to **incomplete**, **corrupted**, or **unusable** data in the server.

<br>

## 3. What is the format of form submissions when using the default browser form POST?  
**Answer:** application/x-www-form-urlencoded

<br>

## 4. Why do we use `fs.appendFile` instead of `fs.writeFile`?

```js
fs.appendFile // Adds new content to the end of the file without deleting existing content.
fs.writeFile // Overwrites the file entirely, replacing all existing content.
```

Using `appendFile` is ideal for logging or accumulating entries like form submissions.

<br>

## 5. How could this be improved or made more secure?

**Answer:** To enchance functionality and security:
- **Input validation**: Sanitize and validate user input before processing or storing it.
- **Rate limiting**: Prevent abuse by limiting the number of requests per client.
- **Use a framework like Express**: Makes routing, parsing POST data, and adding middleware (like validation or authentication) easier and more secure.

<br>

---