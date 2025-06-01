// server.js
const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  console.log(`Received ${method} request for ${url}`);

  // Use the route variable for comparison
  const route = `${method} ${url}`;
  switch (route) {
    case "GET /":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`
            <html>
                <head><title>Home</title></head>
                    <body>
                         <h1>Welcome to the Home Page</h1>
                         <p>This is a simple Node.js server.</p>
                    </body>
            </html>
            `);
      break;
    case "GET /about":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`
              <html>
                  <head><title>About</title></head>
                  <body>
                      <p>at CADT, we love node.js!</p>
                  </body>
              </html>
            `);
      break;
    case "GET /contact-us":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`
              <html>
                  <head><title>Contact Us</title></head>
                  <body>
                      <p>You can reach us via email</p>
                  </body>
              </html>
            `);
      break;
    case "GET /products":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`
                <html>
                    <head><title>Products</title></head>
                    <body>
                        <p>Buy One Get One</p>
                    </body>
                </html>
            `);
      break;
    case "GET /projects":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`
            <html>
                <head><title>Projects</title></head>
                <body>
                    <p>We are working on a new project</p>
                </body>
            </html>
            `);
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
