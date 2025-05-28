const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello World!");
  return res.endd();
});

server.listen(3000, () => {
  console.log("Server running");
});
