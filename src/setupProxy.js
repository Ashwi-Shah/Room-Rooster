const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://room-rooster-one.vercel.app/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    })
  );
};
