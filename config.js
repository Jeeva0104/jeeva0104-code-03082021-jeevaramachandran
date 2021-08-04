const dotenv = require("dotenv");

dotenv.config();

const ENV = process.env;
var env = ENV.NODE_ENV;

module.exports = {
  port: parseInt(ENV[`PORT`] || "8080", 10),
  hostName: ENV[`HOSTNAME`] || "localhost",
};
