// Node
const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const json = require("koa-json");
const cors = require("@koa/cors");
const helmet = require("koa-helmet");

require("dotenv").config();

// Local
const routes = require("./routes");

const app = new Koa();

app.use(bodyParser()).use(json()).use(helmet()).use(cors());

app.use(routes.APIv1.routes()).use(routes.APIv1.allowedMethods());

const port = process.env.PORT || 6001;
app.listen(port, () =>
  console.log(`Application started on PORT ${port}`)
);
