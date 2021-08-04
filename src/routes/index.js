const swaggerUi = require("swagger-ui-express");
const { swagger } = require("../swagger/index");
const { SUCCESS, SERVER_ERROR } = require("../helper/constant");
const { calculateBMI } = require("../controller/index");
var multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./uploads");
  },
  filename: function (req, file, callback) {
    console.log(file, "file");
    callback(null, "data-" + Date.now() + ".json");
  },
});
var upload = multer({ storage: storage });

module.exports = (app) => {
  app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swagger));
  app.get("/api/health", (req, res) => res.send("ok"));
  app.post("/api/calculate", async (req, res) => {
    try {
      const result = calculateBMI(req.body, res);
      return res.status(SUCCESS).send(result);
    } catch (error) {
      console.error(error);
      return res.status(SERVER_ERROR).send(error.toString());
    }
  });

  app.post("/api/upload", upload.any(), function (req, res) {
    try {
      var [files] = req.files;
      const data = require(`../../uploads/${files.filename}`);
      const result = calculateBMI(data);
      return res.status(SUCCESS).send(result);
    } catch (error) {
      console.error(error);
      return res.status(SERVER_ERROR).send(error.toString());
    }
  });
};
