/** @format */

// server.js
const http = require("http");
const querystring = require("querystring");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  console.log(`Received ${method} request for ${url}`);

  if (url === "/" && method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("Welcome to the Home Page");
  }

  if (url === "/contact" && method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
          <form method="POST" action="/contact">
            <input type="text" name="name" placeholder="Your name" />
            <button type="submit">Submit</button>
          </form>
        `);
    return;
  }

  if (url === "/contact" && method === "POST") {
    // Implement form submission handling
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const parsedBody = querystring.parse(body);
      const name = parsedBody.name;
      if (!name) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        return res.end("Name is required");
      }
      fs.appendFile("submissions.txt", `${name}\n`, (err) => {
        if (err) {
          console.error("Error writing to file", err);
          res.writeHead(500, { "Content-Type": "text/plain" });
          return res.end("Internal Server Error");
        }
        console.log(`Received name: ${name}`);
        res.writeHead(200, { "Content-Type": "text/plain" });
        return res.end(`Thank you for your submission, ${name}!`);
      });
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    return res.end("404 Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
  console.log("Server is running at http://localhost:3000/contact");
});
