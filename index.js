const schedule = require("node-schedule");
console.log("----------Starting Node---------schedular");

const job = schedule.scheduleJob("* * * * *", function () {
  console.log("The answer to life, the universe, and everything!");
});
