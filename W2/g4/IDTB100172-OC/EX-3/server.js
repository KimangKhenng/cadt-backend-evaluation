// server.js
import http from "http";
import fs from "fs";

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
  } else if (url === "/contact" && method === "POST") {
    console.log("Got to post method");
    let body = "";

    req.on("data", (chunk) => {
      console.log("got to data listening");
      body += chunk.toString();
    });

    req.on("end", () => {
      console.log(body);

      const parsedBody = new URLSearchParams(body);
      const name = parsedBody.get("name");

      if (!name || name.trim() === "") {
        res.statusCode = 400;
        res.setHeader("Content-Type", "text/plain");
        return res.end("Name field cannot be empty");
      }

      try {
        // convert to json
        const data = Object.fromEntries(parsedBody.entries());
        fs.appendFile(
          "./submissions.txt",
          JSON.stringify(data) + "\n",
          "utf8",
          (err) => {
            if (err) {
              res.statusCode = 500;
              return res.end("Failed to save data");
            }
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/plain");
            return res.end(`
                    <html>
                        <head>
                            <title>Submission Confirmation</title>
                        </head>
                        <body>
                            <h1>Thank you for your submission!</h1>
                            <p>Your data has been successfully saved.</p>
                            <a href="/">Go back to Home</a>
                        </body>
                    </html>
                `);
          }
        );
      } catch (err) {
        res.statusCode = 500;
        console.error(err);
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    return res.end("404 Not Found");
  }
});

server.listen(3011, () => {
  console.log("Server is running at http://localhost:3011");
});
