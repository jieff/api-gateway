const route = require('express').Router();
const httpProxy = require('express-http-proxy')
const privacyServiceProxy = httpProxy(process.env.PRIVACY)

route.get('/privacy', (req, res, next) => privacyServiceProxy(req, res, next))

module.exports = route;