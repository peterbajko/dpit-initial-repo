import http from "node:http";

const host = "localhost",
  port = 6000;

const requestListener = function (req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.writeHead(200);
  res.end("My first Server!");
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
