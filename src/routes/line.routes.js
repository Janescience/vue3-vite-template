const controller = require("../controllers/line.controller");
const { authJwt } = require("../middlewares")
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/line/redirect",controller.redirect);
  app.post("/line/notify",[authJwt.verifyToken],controller.notify);
};