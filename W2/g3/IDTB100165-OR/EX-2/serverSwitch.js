import http from "http";

const server = http.createServer((req, res) => {
  const { url, method } = req;
  console.log(`Received ${method} request for ${url}`);

  switch (true) {
    case url === "/" && method === "GET":
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

    case url === "/about" && method === "GET":
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end("About us: at CADT, we love node.js!");
      break;

    case url === "/contact-us" && method === "GET":
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end("You can reach us via email...");
      break;

    case url === "/products" && method === "GET":
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end("Buy one get one...");
      break;

    case url === "/projects" && method === "GET":
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end("Here are our awesome projects");
      break;

    default:
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
  }
});

server.listen(3001, () => {
  console.log("Server is running at http://localhost:3001");
});
