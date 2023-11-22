const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/cultural-event/list', {
      target: 'https://elegant.kro.kr',
      changeOrigin: true,
    })
  );
};
