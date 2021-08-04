const { SUCCESS, SERVER_ERROR } = require("../helper/constant");
const { calculateBMI } = require("../controller/index");
module.exports = (app) => {
  app.get("/api/health", (req, res) => res.send("ok"));
  app.post("/api/calculate", async (req, res) => {
    try {
      const result = calculateBMI(req, res);
      return res.status(SUCCESS).send(result);
    } catch (error) {
      console.error(error);
      return res.status(SERVER_ERROR).send(error.toString());
    }
  });
};
