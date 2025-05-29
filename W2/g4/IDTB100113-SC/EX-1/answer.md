### Q1 – What error message do you see in the terminal when you access http://localhost:3000? What line of code causes it?
TypeError: res.endd is not a function
 at Server.<anonymous> (E:\Doc\CADT-Y2T3\Backend\Lab
2\StartCode\StartCode\ex1.js:3:94)
 at Server.emit (node:events:507:28)
 at parserOnIncoming (node:_http_server:1153:12)
 at HTTPParser.parserOnHeadersComplete (node:_http_common:117:17)
The line that causes the issue is return res.endd();
### Q2 – What is the purpose of res.write() and how is it different from res.end()?
res.write() sends part of the response to the client.
res.end() signals that you're finished sending the response.
### Q3 – What do you think will happen if res.end() is not called at all?
If the res.end() is not called at all, the browser will keep waiting for a response that never
finishes.
### Q4 – Why do we use http.createServer() instead of just calling a function directly?
 Because http.createServer() creates an HTTP server object that listens for requests, calls
handler function and manage low-level HTTP protocols.
### Q5 – How can the server be made more resilient to such errors during development?
User try/catch blocks to handle runtime errors, use automatic restarters.