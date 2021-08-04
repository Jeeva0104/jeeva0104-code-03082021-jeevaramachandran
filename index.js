const express = require("express");
const app = express();
const { port, hostName } = require("./config");
console.log(port);
async function main() {
  app.use(express.json({ limit: "50mb" }));

  require("./src/routes/index")(app);
  if (process.env.NODE_ENV !== "test") {
    console.log(`App listening on port http://${hostName}:${port}/api`);
    app.listen(port, app.get("host"));
  }
}

main().catch((err) => {
  console.error(err);
  return new Error(err);
});
module.exports = app;
