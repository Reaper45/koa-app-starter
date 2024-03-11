// Application routes
const example = require("./example");

const routes = () => {
  const APIv1 = require("@koa/router")({ prefix: "/api/v1" });

  APIv1.use("/example", example.routes());

  return {
    APIv1,
  };
};

module.exports = routes();