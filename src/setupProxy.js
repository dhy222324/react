const proxy = require("http-proxy-middleware");
var Mock = require("mockjs");

module.exports = function(app) {
  app.get("/test", (req, res) => {
    var data = Mock.mock({
      "list|1-10": [
        {
          "id|+1": 1
        }
      ]
    });
    res.json(data);
  });

  // https://api.juooo.com /city/city/getSortedCityList?version=6.0.8&referer=2
  app.use(
    proxy("/apis", {
      target: "https://api.juooo.com",
      changeOrigin: true,
      pathRewrite: {
        "^/apis": ""
      }
    })
  );
};
