const { createProxyMiddleware } = require('http-proxy-middleware');

const userServiceProxy = createProxyMiddleware({
  target: process.env.URL_USER,
  changeOrigin: true,
  pathRewrite: {
    '^/administrator': '/administrator',
    '^/employee': '/employee',
    '^/enterprise': '/enterprise',
  },
});

const authServiceProxy = createProxyMiddleware({
  target: process.env.URL_AUTH,
  changeOrigin: true,
  pathRewrite: {
    '^/auth': '/auth'
  },
});



module.exports = {
  userServiceProxy,
  authServiceProxy
}
