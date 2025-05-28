❓ Reflective Questions 
1. What happens when you visit a URL that doesn’t match any of the three defined? 
Asnwer:
    It returns a 404 Not Found message because the default case in the switch statement is triggered. 
    
2. Why do we check both the req.url and req.method? 
Asnwer:
        Because the server can have different actions for the same URL depending on the HTTP 
method (like GET, POST, PUT).

3. What MIME type (Content-Type) do you set when returning HTML instead of plain 
text? 
Answer:
        For HTML, you should set it to Content-Type: text/html. 

4. How might this routing logic become harder to manage as routes grow? 
Answer:
        The switch case will become very long and harder to read, making it difficult to maintain. 

5. What benefits might a framework offer to simplify this logic? 
Answer:
        A framework (like Express) offers: 
                • Cleaner route definitions (app.get('/about', handler)), 
                • Middleware for easier processing, 
                • Error handling, 
                • Built-in methods for parsing data (like JSON), 
                • Simpler request and response handling. 