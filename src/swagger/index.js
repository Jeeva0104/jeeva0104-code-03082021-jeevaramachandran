const { hostName, port } = require("../../config");
const { category } = require("./definitions/category");
const { categoryPath } = require("./paths/category");

const swagger = {
  swagger: "2.0",
  info: {
    description: "Health Risk API Documentation",
    version: "1.0.0",
    title: "Health Risk",
    termsOfService: "http://swagger.io/terms/",
    contact: {
      email: "",
    },
    license: {
      name: "Apache 2.0",
      url: "http://www.apache.org/licenses/LICENSE-2.0.html",
    },
  },
  host: `${hostName}:${port}`,
  basePath: "/api",
  tags: [
    {
      name: "category",
      description: "Everything about your Health Risk and Category",
    },
  ],
  schemes: ["http", "https"],
  paths: {
    ...categoryPath,
  },
  definitions: {
    Category: category,
  },
};

module.exports = {
  swagger,
};
