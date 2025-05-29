EXERCISE 1 – Refactoring
Q1 – What challenges did you face when using the native http module that Express.js helped you solve?
Using the native HTTP module required a lot of manual work such as parsing URLs, checking HTTP methods, and handling request and response data.
Q2 – How does Express simplify route handling compared to the native HTTP server?
Express simplifies route handling by allowing you to define routes using simple methods like app.get(), app.post(), and others. You don't need to manually check the request URL or method, and you can organize routes more cleanly.
Q3 – What does middleware mean in Express, and how would you replicate similar behavior using the native module?
Middleware in Express refers to functions that run before a route handler is executed. They can modify the request or response objects, perform tasks like logging, authentication, or error handling, and then pass control to the next function.
REFLECTIVE QUESTIONS
Middleware & Architecture:
Q1. What are the advantages of using middleware in an Express application?
Middleware lets you handle things like logging, auth, or errors in one place for all routes.
Q2. How does separating middleware into dedicated files improve the maintainability of
your code?
Putting middleware in separate files makes code cleaner and easier to update.
Q3. If you had to scale this API to support user roles (e.g., admin vs student), how would you modify the middleware structure?
Use role-checking middleware like checkRole('admin') to control access based on user roles.
Query Handling & Filtering
Q4. How would you handle cases where multiple query parameters conflict or are ambiguous (e.g., minCredits=4 and maxCredits=3)?
Check for logic errors ( minCredits > maxCredits) and show an error message if found.
Q5. What would be a good strategy to make the course filtering more user-friendly (e.g., handling typos in query parameters like “falll” or “dr. smtih”)?
Use smart matching (like fuzzy search) to handle small typos and give suggestions.
Security & Validation
Q6. What are the limitations of using a query parameter for authentication
(e.g., ?token=xyz123)? What alternatives would be more secure?
Tokens in URLs are unsafe. Use headers (like Authorization) instead.
Q7. Why is it important to validate and sanitize query inputs before using them in your backend logic?
Validation stops bad data and prevents attacks like injections.
Abstraction & Reusability
Q8. Can any of the middleware you wrote be reused in other projects? If so, how would you package and document it?
Yes, Reusable middleware (like auth) can be used in other projects. Put them in a folder and document with comments.
Q9. How could you design your route and middleware system to support future filters (e.g., course format, time slot)?
Make filters into small functions. Add new ones without changing the whole code.
Bonus – Real-World Thinking
Q10. How would this API behave under high traffic? What improvements would you need to make for production readiness (e.g., rate limiting, caching)?
Under high traffic, use rate limits, caching, and maybe load balancing to keep the server fast and stable.