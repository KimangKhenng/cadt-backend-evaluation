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
    let body = [];

    req.on("data", (chunk) => body.push(chunk));

    return req.on("end", () => {
      const name = decodeURIComponent(
        Buffer.concat(body).toString().split("=")[1]
      )
        .replace(/\+/g, " ")
        .trim();

      // BONUS 1: Name validation
      if (!name) {
        res.writeHead(400);
        return res.end(
          '<h1>Error: Name required</h1><a href="/contact">Back</a>'
        );
      }

      // BONUS 3: JSON storage
      fs.readFile("submissions.json", "utf8", (readErr, data) => {
        const submissions = data ? JSON.parse(data) : [];
        submissions.push({ name, date: new Date().toISOString() });

        fs.writeFile(
          "submissions.json",
          JSON.stringify(submissions, null, 2),
          (err) => {
            if (err) {
              res.writeHead(500);
              return res.end("Error saving submission");
            }

            // BONUS 2: HTML confirmation
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(`
                    <h1>Thank you, ${name}!</h1>
                    <p>Your submission was saved.</p>
                    <a href="/contact">Submit again</a>
                `);
          }
        );
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
