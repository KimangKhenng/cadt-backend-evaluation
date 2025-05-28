// server.js
const http = require("http");

const server = http.createServer((req, res) => {
	const url = req.url;
	const method = req.method;

	console.log(`Received ${method} request for ${url}`);

	switch (url) {
		case "/":
			if (method === "GET") {
				res.writeHead(200, { "Content-Type": "text/html" });
				return res.end(`
                    <html>
                        <head><title>Home</title></head>
                        <body>
                            <h1>Welcome to the Home Page</h1>
                            <p>This is a simple Node.js server.</p>
                        </body>
                    </html>
                `);
			}
			break;
		case "/about":
			if (method === "GET") {
				res.writeHead(200, { "Content-Type": "text/html" });
				return res.end(`
                        <html>
                            <head><title>About</title></head>
                            <body>
                                <h1>About us: at CADT, we love node.js! </h1>
                            </body>
                        </html>
                    `);
			}
			break;
		case "/contact-us":
			if (method === "GET") {
				res.writeHead(200, { "Content-Type": "text/html" });
				return res.end(`
                        <html>
                            <head><title>Contact us</title></head>
                            <body>
                                <h1>You can reach us via email…</h1>
                            </body>
                        </html>
                    `);
			}
			break;
		case "/products":
			if (method === "GET") {
				res.writeHead(200, { "Content-Type": "text/html" });
				return res.end(`
                        <html>
                            <head><title>Products</title></head>
                            <body>
                                <h1>Buy one get one…</h1>
                            </body>
                        </html>
                    `);
			}
			break;
		case "/projects":
			if (method === "GET") {
				res.writeHead(200, { "Content-Type": "text/html" });
				return res.end(`
                        <html>
                            <head><title>Projects</title></head>
                            <body>
                                <h1>Here are our awesome projects</h1>
                            </body>
                        </html>
                    `);
			}
			break;
		default:
			res.writeHead(404, { "Content-Type": "text/plain" });
			return res.end("404 Not Found");
	}
});

server.listen(3000, () => {
	console.log("Server is running at http://localhost:3000");
});
