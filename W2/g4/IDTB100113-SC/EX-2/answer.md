### 1. What happens when you visit a URL that doesn’t match any of the three defined?
If the URL doesn't match, it will executes the default case in the switch block.
### 2. Why do we check both the req.url and req.method?
req.url tells us which path the user requested.
req.method tells us which type of HTTP method.
### 3. What MIME type (Content-Type) do you set when returning HTML instead of plain
text?
'Content-Type': 'text/html'
### 4. How might this routing logic become harder to manage as routes grow?
The switch statement becomes long and hard to read, hard to debug the codes, hard to
maintain the code.
### 5. What benefits might a framework offer to simplify this logic?
A framework helps by making code shorter, more organized, and easier to scale,
especially when your project becomes bigger.