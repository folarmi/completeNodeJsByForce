// Intro to http
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end('Hello from Node baby"');
  } else if (req.url === "/about") {
    res.end("Learn about us!!!");
  } else {
    res.end(`<h1>Ooops! missed it</h1>
    <p>Seems you lost your way</p>
    <a href="/">Find your way back </a>
    `);
  }
});

server.listen(5000);
