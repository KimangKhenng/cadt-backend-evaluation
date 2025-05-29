// server.js
import fs from "fs";
import http from "http";

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
      body += chunk.toString();
    });
    req.on("end", () => {
      const formData = new URLSearchParams(body);
      const name = formData.get("name");
      if (name === "") {
        res.writeHead(400, { "Content-Type": "text/plain" });
        return res.end("Name is required");
      }
      const data = {
        name: name
      };

      fs.readFile("submissions.json", "utf8", (err, fileData) => {
        let submissions = [];
        if (!err) {
            try {
              submissions = JSON.parse(fileData);
              if (!Array.isArray(submissions)) {
                submissions = [];
              }
            } catch (parseErr) {
              console.error("Error parsing JSON:", parseErr);
            }
          }
        submissions.push(data);
        fs.writeFile("submissions.json", JSON.stringify(submissions, null, 2), (err) => {
          if (err) {
            console.error("Error writing to file", err);
            res.writeHead(500, { "Content-Type": "text/plain" });
            return res.end("Error saving to file");
          } else {
            console.log("Form data saved to submissions.json");
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(`
                        <h1>Thank you for your submission!</h1>
                        <p> We recieved your name: ${name}</p>
                        <a href="/contact"> Submit another response</a>`);
          }
        });
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
