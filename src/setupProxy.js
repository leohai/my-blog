const proxy = require('http-proxy-middleware');
//http://148.70.186.210:8081/api
//好像不能配合nginx用端口未改
const target=process.env.NODE_ENV=='development'?
    "http://localhost:8081/api":"http://148.70.186.210:8081/api"
module.exports = (app) =>{
  app.use(
    proxy("/api", {
      target,
      changeOrigin: true, // needed for virtual hosted sites
      // ws: true, // proxy websockets
      pathRewrite: {
        "^/api": ""
      }
    })
  );
};