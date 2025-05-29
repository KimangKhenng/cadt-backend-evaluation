// server.js
const http = require("http");
const queryString = require("querystring");
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
      console.log("Message Received: ", body);
      const parsed = queryString.parse(body);
      const filePath = "submissions.JSON";
      if (parsed.name.length > 0) {
        fs.readFile(filePath, "utf-8", (err, data) => {
          let submissions = [];

          if (!err) {
            try {
              submissions = JSON.parse(data);
              if (!Array.isArray(submissions)) submissions = [];
            } catch (e) {
              submissions = [];
            }
          }

          submissions.push(parsed);

          fs.writeFile(
            filePath,
            JSON.stringify(submissions, null, 2),
            (err) => {
              if (err) {
                console.error("Failed to write file:", err);
                res.writeHead(500);
                return res.end("Server Error");
              }

              res.writeHead(200, { "Content-Type": "text/html" });
              res.end(`
              <html>
                <head><title>Success</title></head>
                <body>
                  <h1>Congratulations!</h1>
                  <p>You have successfully submitted your name</p>
                </body>
              </html>
            `);
            }
          );
        });
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
            <html>
              <head><title>Error</title></head>
              <body>
                <h1>Errors!</h1>
                <p>Your submission was unsuccessful because you did not input any name.</p>
              </body>
            </html>
        `);
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    return res.end("404 Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
