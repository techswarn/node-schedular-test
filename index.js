const schedule = require("node-schedule");
const http = require("node:http");
const hostname = "0.0.0.0";
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Schedular\n");
});

console.log("----------Starting Node schedular----------");

const job = schedule.scheduleJob("* * * * *", function () {
  console.log("The answer to life, the universe, and everything!");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
