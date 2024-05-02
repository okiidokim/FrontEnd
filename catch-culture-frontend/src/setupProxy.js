const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/cultural-event/list', {
      target: 'https://catch-culture.com',
      changeOrigin: true,
    })
  );
};
