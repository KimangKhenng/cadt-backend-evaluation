Reflective Questions
Q1. What happens when you visit a URL that doesn’t match any of the three defined?
Answer: We will be redirected to a 404 not found page.

Q2. Why do we check both the req.url and req.method?
Answer: Maybe we can just check the url. However, in some cases sucha submitting a form, the url is exactly the same but we want to
send data to server instead of fetching. So by also checking for method, we can ensure that the server response correctly.

Q3. What MIME type (Content-Type) do you set when returning HTML instead of plain text?
Answer: We set it to 'text/html'.

Q4. How might this routing logic become harder to manage as routes grow?
Answer: The logic in this practice put all both the content of response and path of requests into a single file. As we have more routes
this file will grow to a point that is hard to maintain since there are too many line of codes in a single file.

Q5. What benefits might a framework offer to simplify this logic?
Answer: A framework may offer a router that fetch a file based on the url. This allow us to separate response content, therefore making
routing easier to manage.