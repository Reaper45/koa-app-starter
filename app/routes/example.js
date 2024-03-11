const router = require("@koa/router")();

router.get("/", async (ctx) => {
  // const payload = ctx.request.body;

  ctx.type = "application/json";
  ctx.status = 200;
  ctx.body = {
    messages: "Example api response!",
    data: result,
    success: true,
  };
});

module.exports = router;
