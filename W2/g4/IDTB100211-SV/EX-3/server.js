// server.js
import http from "http";
import fs from "fs";
import querystring from "querystring";

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
			const parseBody = querystring.parse(body);
			const name = parseBody.name || "Unnamed";

			fs.appendFile("./submissions.txt", name + "\n", (err) => {
				if (err) {
					res.writeHead(500, { "Content-Type": "text/plain" });
					return res.end("Error saving submission");
				}

				res.writeHead(200, { "Content-Type": "text/plain" });
				res.end("Form submitted!");
			});
		});

		return;
	} else {
		res.writeHead(404, { "Content-Type": "text/plain" });
		return res.end("404 Not Found");
	}
});

server.listen(3000, () => {
	console.log("Server is running at http://localhost:3000");
});
