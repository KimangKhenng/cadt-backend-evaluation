// server.js
const http = require("http");
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
    let body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const name = parsedBody.split("=")[1].replace(/\+/g, " ");

      console.log("Form submission:", name);

      fs.appendFile("submissions.txt", name + "\n", (err) => {
        if (err) {
          console.error("Error saving submission:", err);
          res.writeHead(500, { "Content-Type": "text/html" });
          return res.end(`
                        <h1>Error</h1>
                        <p>Sorry, we couldn't save your submission</p>
                        <a href="/contact">Try again</a>
                    `);
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
                    <h1>Thank you!</h1>
                    <p>We received your submission: ${name}</p>
                    <a href="/contact">Submit another</a>
                `);
      });
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    return res.end("404 Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
